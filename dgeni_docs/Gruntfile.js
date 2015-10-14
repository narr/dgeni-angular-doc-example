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
        protractor: 'grunt-protractor-runner',
        buildcontrol: 'grunt-build-control'
    });

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // All the output you see in the console from both Grunt and
    // running tasks will also be written to ./grunt.log.
    // require('logfile-grunt')(grunt, {clearLogFile: true});
    logfile = require('logfile-grunt');

    targetPath = '../src'; // the target path for documentation

    // @ Options
    shellOpts = {
        targetPath: targetPath
    };
    copyOpts = {
        ngExamples: {
            cwd: targetPath,
            src: [
                'bower_components/angular/angular.min.js',
                'bower_components/angular-route/angular-route.min.js',
                'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js'
            ]
        }
    };
    concatOpts = {
        ngExamples: {
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
        prodPath: '../dist_docs', // the distribution path for documentation
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
        karma: getConfig('karma'),
        watch: getConfig('watch'),
        // The following *-min tasks produce minified files in the targeted folder
        imagemin: getConfig('imagemin'),
        // Allow the use of non-minsafe AngularJS files. Automatically makes it
        // minsafe compatible so Uglify does not destroy the ng references
        ngAnnotate: getConfig('ngAnnotate'),
        uglify: getConfig('uglify'),
        filerev: getConfig('filerev'),
        htmlmin: getConfig('htmlmin'),
        protractor: getConfig('protractor'),
        buildcontrol: getConfig('buildcontrol')
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

    // @ ng
    grunt.registerTask('lintNg', [
        'jshint:ngClientType', 'jshint:ngServerType',
        'jscs:ngClientType', 'jscs:ngServerType'
    ]);
    grunt.registerTask('bowerNg', ['shell:srcBower', 'shell:ngBower']);
    grunt.registerTask('lessNg', ['less:ngVendor', 'less:ngApp']);
    grunt.registerTask('cssNg', ['lessNg', 'copy:ngAsset']);
    grunt.registerTask('dgeniNg', function() {
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
        dgeni = require('./ng/dgeni/config')({
            sourceFiles: {
                include: srcPathFromRoot + '/**/*.js',
                exclude: srcPathFromRoot + '/bower_components/**'
            },
            git: {
                info: {
                    owner: 'Narr-',
                    repo: 'dgeni-tempate-example'
                }
            },
            examples: {
                deployments: deployments
            }
        });
        done = this.async();
        dgeni.generate().then(function() {
            done();
        });
    });
    grunt.registerTask('doNgTemplates', [
        'copy:ngTemplates', 'ngtemplates:docApp'
    ]);
    grunt.registerTask('doNgExamples', [
        'copy:ngExamples', 'concat:ngExamples'
    ]);
    grunt.registerTask('jsNg', ['dgeniNg', 'doNgTemplates', 'doNgExamples']);
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

    grunt.registerTask('devNg', [
        'file-log',
        'lintNg',
        'clean:ngDev',
        'bowerNg',
        'cssNg',
        'jsNg',
        'karma:jasmineNg'

        // mochaTest Server
    ]);
    grunt.registerTask('buildNg', [
        'devNg',
        'clean:ngBuild',
        'copy:ngIndex',
        'copy:ngDistAssets',
        'imagemin:ng',
        'setUsemin:ng',
        'useminPrepare',
        'concat:generated',
        'copy:ngReplaceTempPath',
        'ngAnnotate:usemin',
        'uglify:generated',
        'filerev:ng',
        'usemin',
        'copy:ngDistExamples',
        'ngAnnotate:examples',
        'uglify:ngExamples',
        'filerev:ngExamples',
        'setUsemin:ngExamples',
        'usemin',
        'htmlmin:ngDist',
        // check mocha, serverjs, protractorNg, buildcontrol
    ]);
    // ng @
    // Task @
};
