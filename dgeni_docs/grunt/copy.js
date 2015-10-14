/*!
 * grunt-contrib-copy task config
 */

'use strict';

module.exports = function(options) {
    return {
        ngAsset: {
            files: [
                {
                    expand: true,
                    flatten: true,
                    cwd: 'ng/client/bower_components',
                    src: 'bootstrap/fonts/*',
                    dest: 'ng/client/.tmp/assets/fonts'
                }
            ]
        },
        ngTemplates: {
            expand: true,
            cwd: 'ng/client',
            src: ['{app,components}/**/*.html'],
            dest: 'ng/client/.tmp'
        },
        ngExamples: {
            expand: true,
            cwd: options.ngExamples.cwd,
            src: options.ngExamples.src,
            dest: 'ng/client/.tmp/examples/common'
        },
        ngIndex: {
            options: {
                process: function(content, srcpath) {
                    if (srcpath === 'ng/client/index.html') {
                        return content.replace(/<script.*?livereload\.js.*?<\/script>/, '');
                    }
                    return content;
                }
            },
            src: 'ng/client/index.html',
            dest: '<%= prodPath %>/ng/client/index.html'

        },
        ngDistAssets: {
            files: [
                {
                    '<%= prodPath %>/ng/client/404.html': 'ng/client/404.html',
                    '<%= prodPath %>/ng/client/favicon.ico': 'ng/client/favicon.ico'
                },
                {
                    expand: true,
                    cwd: 'ng/client/.tmp/assets',
                    src: '**/*',
                    dest: '<%= prodPath %>/ng/client/assets'
                }
            ]
        },
        ngReplaceTempPath: {
            options: {
                process: function(content, srcpath) {
                    return content.replace(/<iframe class=runnable-example-frame src=.tmp\//g, '<iframe class=runnable-example-frame src=');
                }
            },
            src: 'ng/client/.tmp/usemin/concat/js/app.js',
            dest: 'ng/client/.tmp/usemin/concat/js/app.js'
        },
        ngDistExamples: {
            expand: true,
            cwd: 'ng/client/.tmp/examples',
            src: '**/*',
            dest: '<%= prodPath %>/ng/client/examples'
        }


        // serverjs
    };
};
