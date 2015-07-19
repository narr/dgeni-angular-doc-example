/*!
 * grunt-contrib-htmlmin task config
 */

'use strict';

module.exports = function(grunt, config) {

    return {
        docNg: {
            options: {
                removeComments: true,
                collapseWhitespace: true
            },
            files: [
                {
                    expand: true,
                    cwd: '<%= docPath.dest %>/ng',
                    dest: '<%= docPath.dest %>/ng',
                    src: [
                        '**/*.html'
                    ]
                }
            ]
        }
    };
};
