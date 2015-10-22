'use strict';

module.exports = function() {
    return {
        options: {
            configFile: 'test/e2e/protractor.conf.js',
            webdriverManagerUpdate: true
        },
        chrome: {},
        firefox: {
            options: {
                configFile: 'test/e2e/protractor.conf.firefox.js'
            }
        }
    };
};
