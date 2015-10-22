'use strict';

module.exports = function() {
    return {
        dist: {
            options: {
                minifyCSS: true,
                minifyJS: true,
                removeComments: true,
                collapseWhitespace: true
            },
            expand: true,
            cwd: '<%= prodPath %>/client',
            src: '**/*.html',
            dest: '<%= prodPath %>/client'
        }
    };
};
