'use strict';

module.exports = function(options) {
    return {
        assets: {
            files: [
                {
                    expand: true,
                    flatten: true,
                    cwd: 'client/bower_components',
                    src: 'bootstrap/fonts/*',
                    dest: 'client/.tmp/assets/fonts'
                }
            ]
        },
        templates: {
            expand: true,
            cwd: 'client',
            src: '{app,components}/**/*.html',
            dest: 'client/.tmp'
        },
        examplesCommonLibs: {
            expand: true,
            cwd: options.examplesCommonLibs.cwd,
            src: options.examplesCommonLibs.src,
            dest: 'client/.tmp/examples/common'
        },
        distIndex: {
            options: {
                process: function(content, srcpath) {
                    if (srcpath === 'client/index.html') {
                        return content.replace(/<script.*?livereload\.js.*?<\/script>/, '');
                    }
                    return content;
                }
            },
            src: 'client/index.html',
            dest: '<%= prodPath %>/client/index.html'

        },
        distAssets: {
            files: [
                {
                    '<%= prodPath %>/client/404.html': 'client/404.html',
                    '<%= prodPath %>/client/favicon.ico': 'client/favicon.ico'
                },
                {
                    expand: true,
                    cwd: 'client/.tmp/assets',
                    src: '**/*',
                    dest: '<%= prodPath %>/client/assets'
                }
            ]
        },
        replaceTempPath: {
            options: {
                process: function(content, srcpath) {
                    return content.replace(/<iframe class=runnable-example-frame src=.tmp\//g, '<iframe class=runnable-example-frame src=');
                }
            },
            src: 'client/.tmp/usemin/concat/js/app.js',
            dest: 'client/.tmp/usemin/concat/js/app.js'
        },
        distExamples: {
            expand: true,
            cwd: 'client/.tmp/examples',
            src: '**/*',
            dest: '<%= prodPath %>/client/examples'
        },
        distServer: {
            files: [
                {
                    '<%= prodPath %>/package.json': 'dist_package.json'
                },
                {
                    expand: true,
                    cwd: 'server',
                    src: [
                        'server.js'
                    ],
                    dest: '<%= prodPath %>/server'
                }
            ]
        }
    };
};
