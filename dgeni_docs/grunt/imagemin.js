/*!
 * grunt-contrib-imagemin task config
 */

'use strict';

module.exports = function() {
    return {
        ng: {
            expand: true,
            cwd: '<%= prodPath %>/ng/client/assets/images',
            src: '**/*.{png,jpg,jpeg,gif,svg}',
            dest: '<%= prodPath %>/ng/client/assets/images'
        }
    };
};
