/*!
 * grunt-contrib-clean task config
 */

'use strict';

module.exports = function() {
    return {
        ngDev: 'ng/client/.tmp',
        ngBuild: {
            options: {
                force: true
            },
            src: '<%= prodPath %>/ng'
        }
    };
};
