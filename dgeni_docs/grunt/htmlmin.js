/*!
 * grunt-contrib-htmlmin task config
 */

'use strict';

module.exports = function() {
    return {
        ngDist: {
            options: {
                minifyCSS: true,
                minifyJS: true,
                removeComments: true,
                collapseWhitespace: true
            },
            expand: true,
            cwd: '<%= prodPath %>/ng/client',
            src: '**/*.html',
            dest: '<%= prodPath %>/ng/client'
        }
    };
};
