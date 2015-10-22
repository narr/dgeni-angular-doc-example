'use strict';

module.exports = function() {
    return {
        dist: {
            expand: true,
            cwd: '<%= prodPath %>/client/assets/images',
            src: '**/*.{png,jpg,jpeg,gif,svg}',
            dest: '<%= prodPath %>/client/assets/images'
        }
    };
};
