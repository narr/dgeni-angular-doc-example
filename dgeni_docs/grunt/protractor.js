/*!
 * grunt-protractor-runner task config
 */

'use strict';

module.exports = function() {
    return {
        options: {
            configFile: 'protractor.conf.js'
        },
        chrome: {
            options: {
                args: {
                    browser: 'chrome'
                }
            }
        }
    };
};
