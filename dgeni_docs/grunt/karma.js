/*!
 * grunt-karma task config
 */

'use strict';

module.exports = function() {
    return {
        jasmineNg: {
            configFile: 'ng/karma.conf.js',
            singleRun: true
        }
    };
};
