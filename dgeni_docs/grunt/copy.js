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













        distIndex: {
            options: {
                process: function (content, srcpath) {
                    return content.replace(/<head>/, '<head><base href="/">');
                }
            },
            src: '<%= docPath.src %>/ng/index.html',
            dest: '<%= docPath.src %>/ng/index2.html'
        }
    };
};
