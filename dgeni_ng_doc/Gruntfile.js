'use strict';

module.exports = function(grunt) {
    var path, logfile, targetPath,
        shellOpts, copyOpts, concatOpts;

    function getConfig(name, options) {
        return require('./grunt/' + name + '.js')(options);
    }

    path = require('path');

    // Load grunt tasks automatically, when needed
    require('jit-grunt')(grunt, {
        ngtemplates: 'grunt-angular-templates',
        useminPrepare: 'grunt-usemin',
        protractor: 'grunt-protractor-runner'
    });

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // All the output you see in the console from both Grunt and
    // running tasks will also be written to ./grunt.log.
    // require('logfile-grunt')(grunt, {clearLogFile: true});
    logfile = require('logfile-grunt');

    targetPath = '../target_src'; // the target path for documentation

    // @ Options
    shellOpts = {
        targetPath: targetPath
    };
    copyOpts = {
        examplesCommonLibs: {
            cwd: targetPath,
            src: [
                'bower_components/angular/angular.min.js',
                'bower_components/angular-route/angular-route.min.js',
                'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js'
            ]
        }
    };
    concatOpts = {
        examplesCommonModule: {
            src: [
                targetPath + '/app/index.js',
                targetPath + '/components/**/*.js'
            ]
        }
    };
    // Options @

    // Define the configuration for all the tasks
    grunt.initConfig({
        // Project settings
        pkg: grunt.file.readJSON('package.json'),
        prodPath: '../dist_ng_doc', // the distribution path for documentation
        // Task Config
        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: getConfig('jshint'),
        jscs: getConfig('jscs'),
        clean: getConfig('clean'), // Empties folders to start fresh
        shell: getConfig('shell', shellOpts),
        less: getConfig('less'),
        copy: getConfig('copy', copyOpts),
        // Package all the html partials into a single javascript payload
        ngtemplates: getConfig('ngtemplates'),
        concat: getConfig('concat', concatOpts),
        mochaTest: getConfig('mochaTest'),
        watch: getConfig('watch'),
        // The following *-min tasks produce minified files in the targeted folder
        imagemin: getConfig('imagemin'),
        // Allow the use of non-minsafe AngularJS files. Automatically makes it
        // minsafe compatible so Uglify does not destroy the ng references
        ngAnnotate: getConfig('ngAnnotate'),
        uglify: getConfig('uglify'),
        filerev: getConfig('filerev'),
        inline: getConfig('inline'),
        htmlmin: getConfig('htmlmin'),
        protractor: getConfig('protractor')
    });

    // @ Task
    grunt.registerTask('default', function() {
        console.log(grunt.config('pkg'));
    });
    grunt.registerTask('file-log', function() {
        logfile(grunt, {
            filePath: 'grunt.log',
            clearLogFile: true
        });
    });

    grunt.registerTask('lint', [
        'jshint:clientType', 'jshint:serverType',
        'jscs:clientType', 'jscs:serverType'
    ]);
    grunt.registerTask('bower', ['shell:targetBower', 'shell:docBower']);
    grunt.registerTask('css', ['less:vendor', 'less:app', 'copy:assets']);
    grunt.registerTask('dgeni', function() {
        var deployments, // for examples
            srcPathFromRoot, dgeni, done;

        deployments = [
            {
                name: 'default',
                examples: {
                    // These files are injected to examples' html.
                    commonFiles: {
                        scripts: [
                            // @ bower files
                            '../common/bower_components/angular/angular.min.js',
                            '../common/bower_components/angular-route/angular-route.min.js',
                            '../common/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
                            // bower files @
                            '../common/module.js'
                        ]
                        // stylesheets: [
                        //     // @ bower files
                        //     '../common/bower_components/bootstrap/dist/css/bootstrap.css',
                        //     // bower files @
                        //     '../common/module.css'
                        // ]
                    },
                    dependencyPath: '../common/bower_components' // deps attr('a.js; b.js') in example tag
                }
            }
        ];
        srcPathFromRoot = path.relative(__dirname + '/..', __dirname + '/' + targetPath);
        dgeni = require('./dgeni/config')({
            sourceFiles: {
                include: srcPathFromRoot + '/**/*.js',
                exclude: srcPathFromRoot + '/bower_components/**'
            },
            git: {
                info: {
                    owner: 'narr',
                    repo: 'dgeni-angular-doc-example'
                }
            },
            examples: {
                deployments: deployments
            }
        });
        done = this.async();
        dgeni.generate().then(function() {
            // Sometimes the example htmls are not generated yet when this callback is called
            // and it causes ngtemplates to miss the example htmls into templetes.js.
            // So give it some times by setTimeout.
            setTimeout(function() {
                done();
            }, 1000);
        });
    });
    grunt.registerTask('doTemplates', [
        'copy:templates', 'ngtemplates:tmp'
    ]);
    grunt.registerTask('doExamples', [
        'copy:examplesCommonLibs', 'concat:examplesCommonModule'
    ]);
    grunt.registerTask('js', ['dgeni', 'doTemplates', 'doExamples']);
    grunt.registerTask('mocha', ['mochaTest:server', 'mochaTest:blanket']);
    grunt.registerTask('setUsemin', function(target) {
        var configData;
        configData = grunt.config.data;
        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        configData.useminPrepare = getConfig('usemin').useminPrepare(target);
        // Performs rewrites based on filerev and the useminPrepare configuration
        configData.usemin = getConfig('usemin').usemin(target);
    });

    grunt.registerTask('dev', [
        'file-log',
        'lint',
        'clean:dev',
        'bower',
        'css',
        'js',
        'shell:karma',
        'mocha'
    ]);
    grunt.registerTask('build', [
        'dev',
        'clean:build',
        'copy:distIndex',
        'copy:distAssets',
        'imagemin:dist',
        'setUsemin:dist',
        'useminPrepare',
        'concat:generated',
        'copy:replaceTempPath',
        'ngAnnotate:usemin',
        'uglify:generated',
        'filerev:dist',
        'usemin',
        'copy:distExamples',
        'ngAnnotate:examples',
        'uglify:distExamples',
        'filerev:distExamples',
        'setUsemin:distExamples',
        'usemin',
        'inline:dist', // look for '__inline' String
        'clean:buildCss',
        'htmlmin:dist',
        'copy:distIdxReplaceStr',
        'copy:distServer',
        'shell:installDistDep'
    ]);

    grunt.registerTask('e2e', function(target) {
        if (!target) {
            target = 'chrome';
        }
        grunt.task.run('protractor:' + target);
    });

    grunt.registerTask('server', function(target) {
        if (target === 'target') {
            grunt.task.run('shell:runTargetServer');
        }
        else if (target === 'dist') {
            grunt.task.run('shell:runDistServer');
        }
    });
    // Task @
};
