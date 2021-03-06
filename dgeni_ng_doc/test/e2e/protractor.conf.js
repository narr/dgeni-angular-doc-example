'use strict';

// An example configuration file.
exports.config = {
    // Boolean. If true, Protractor will connect directly to the browser Drivers
    // at the locations specified by chromeDriver and firefoxPath. Only Chrome
    // and Firefox are supported for direct connect.
    directConnect: true, // https://github.com/angular/angular-phonecat/issues/276

    // Spec patterns are relative to the current working directly when
    // protractor is called.
    specs: '*-spec.js',

    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            args: [
                // '--start-maximized' // doesn't work
                '--window-size=1920,1200'
            ]
        }
    },

    framework: 'jasmine',

    jasmineNodeOpts: {
        // If true, display spec names.
        isVerbose: true
    }
};
