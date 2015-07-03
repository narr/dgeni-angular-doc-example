/*!
 * grunt-spritesmith task config
 */

'use strict';

module.exports = function(grunt, config) {
    return {
        icon: {
            src: [
                'client/assets/images/icons/*.png'
            ],
            dest: 'client/.tmp/assets/images/icons.png',
            destCss: 'client/.tmp/sass/icons.scss',
            cssSpritesheetName: 'mean-chirp-icons'
        }
    };
};
