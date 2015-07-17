'use strict';

module.exports = function(grunt) {
    var logfile;

    function getConfig(name) {
        return require('./grunt/' + name + '.js')();
    }

    // Load grunt tasks automatically, when needed
    require('jit-grunt')(grunt, {
        ngtemplates: 'grunt-angular-templates',
        useminPrepare: 'grunt-usemin',
        protractor: 'grunt-protractor-runner',
        buildcontrol: 'grunt-build-control'
    });

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // All the output you see in the console from both Grunt and running tasks will also be written to ./logs/grunt.log.
    // require('logfile-grunt')(grunt, {clearLogFile: true});
    logfile = require('logfile-grunt');

    // Define the configuration for all the tasks
    grunt.initConfig({
        // Project settings
        pkg: grunt.file.readJSON('package.json'),
        docPath: {
            src: 'dgeni_docs',
            dest: 'dist_docs'
        },
        devPort: 3000,

        // Task Config Start
        shell: getConfig('shell'),
        'http-server': getConfig('httpserver'),
        watch: getConfig('watch'),
        less: getConfig('less'),







        copy: getConfig('copy'),


        // Package all the html partials into a single javascript payload
        ngtemplates: getConfig('ngtemplates'),

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: getConfig('jshint'),
        jscs: getConfig('jscs'),
        // Client Test settings
        karma: getConfig('karma'),

        protractor: {
            options: {
                configFile: 'protractor.conf.js'
            },
            chrome: {
                options: {
                    args: {
                        browser: 'chrome'
                    }
                }
            }
        },


        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '<%= docPath.src %>/.tmp',
                        '<%= docPath.dest %>/*',
                        '!<%= docPath.dest %>/.git*',
                        '!<%= docPath.dest %>/.openshift',
                        '!<%= docPath.dest %>/Procfile'
                    ]
                }]
            },
            server: '.tmp'
        },


        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: getConfig('usemin').useminPrepare,


        // Performs rewrites based on filerev and the useminPrepare configuration
        usemin: getConfig('usemin').usemin,

        // The following *-min tasks produce minified files in the dist folder
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= docPath.src %>/assets/images',
                    src: '{,*/}*.{png,jpg,jpeg,gif}',
                    dest: '<%= docPath.dest %>/public/assets/images'
                }]
            }
        },

        // Allow the use of non-minsafe AngularJS files. Automatically makes it
        // minsafe compatible so Uglify does not destroy the ng references
        ngAnnotate: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= docPath.src %>/.tmp/concat',
                    src: '*/**.js',
                    dest: '<%= docPath.src %>/.tmp/concat'
                }]
            }
        },

        dgeni: getConfig('dgeni'),

        filerev: getConfig('filerev'),


        uglify: {
            options: {
                preserveComments: 'some' // to remain comments starting with *!
            }
        },

        htmlmin: getConfig('htmlmin'),


        buildcontrol: {
            options: {
                dir: 'dist',
                commit: true,
                push: true,
                connectCommits: false,
                message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
            },
            heroku: {
                options: {
                    remote: 'heroku',
                    branch: 'master'
                }
            },
            openshift: {
                options: {
                    remote: 'openshift',
                    branch: 'master'
                }
            }
        }
        // ngDoc(Dgeni)(after file log and lint),



        // Task Config End
    });

    // Task Start
    grunt.registerTask('default', function() {
        console.log(grunt.config('pkg'));
    });
    grunt.registerTask('bower', 'install bower components', ['shell:bower']);
    grunt.registerTask('start-src', 'Start NgDocTarget Server', ['http-server:src']);










    grunt.registerTask('start-mongo', 'shell:startMongo');
    grunt.registerTask('dev-server', 'nodemon:dev');
    grunt.registerTask('log-server', ['file-log', 'shell:startServer']); // to save server logs in logs/grunt.log
    grunt.registerTask('debug-server', ['concurrent:debugServer']); // node inspector mode server
    grunt.registerTask('prod-server', 'nodemon:prod'); // production mode server
    grunt.registerTask('serve', function(target) {
        if (target === 'log') {
            grunt.task.run(['log-server']);
        }
        else if (target === 'debug') {
            grunt.task.run('debug-server');
        }
        else if (target === 'prod') {
            grunt.task.run('prod-server');
        }
        else {
            grunt.task.run('dev-server');
        }
    });








    grunt.registerTask('file-log', function() {
        logfile(grunt, {clearLogFile: true});
    });





    grunt.registerTask('lint', [
        'jshint',
        'jscs'
    ]);
    // grunt test:server or grunt test:client or grunt test:e2e in CLI
    grunt.registerTask('test', function(target) {
        if (target === 'server') {
            grunt.task.run([
                'mochaTest'
            ]);
        }
        else if (target === 'client') {
            grunt.task.run([
                'clean:server',
                'karma:client'
            ]);
        }
        else if (target === 'e2e') {
            grunt.task.run([
                'clean:server',
                'express:dev',
                'protractor'
            ]);
        }
        else {
            grunt.task.run([
                'test:server',
                'test:client'
            ]);
        }
    });
    grunt.registerTask('build', [
        'clean:dist',
        'sprite',
        'sass',
        'ngtemplates',
        'useminPrepare',
        'concat:generated',
        'ngAnnotate',
        'copy:dist',
        // 'cssmin:generated',
        'uglify:generated',
        'filerev',
        'usemin',
        'htmlmin:dist'
    ]);
    grunt.registerTask('prod', [
        'file-log',
        'lint',
        'test',
        'build'
    ]);


    grunt.registerTask('doUsemin', function(target) {
        var configData;
        configData = grunt.config.data;
        if (target === 'docNg') {
            configData.usemin = configData.usemin[target];
        }

        if (target) {
            grunt.task.run('usemin');
        }
    });


    grunt.registerTask('docNgCss', ['copy:docNgAssets', 'less:docNg']);

    grunt.registerTask('doDgeni', function(target) {
        var done = this.async();
        grunt.config.data.dgeni.generate(target).then(function() {
            done();
        });
    });

    grunt.registerTask('docNgTemplates', ['copy:docNgTemplates', 'ngtemplates:docNg']);


    grunt.registerTask('docNg', function(target) {
        var tasks;
        if (target === 'prod') {

        }
        else {
            tasks = [
                'docNgCss',
                'doDgeni',
                'docNgTemplates'

                // 'useminPrepare:docNg',
                // 'concat:generated',
                // 'cssmin:generated',
                // // 'ngAnnotate',
//
                // 'uglify:generated',
//
//
                // 'filerev:preDocNg',
                // 'doUsemin:docNg',
                // 'htmlmin:docNg'
            ];
        }
        grunt.task.run(tasks);
    });
    // Task End
};
