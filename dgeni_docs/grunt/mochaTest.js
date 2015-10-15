/*!
 * grunt-mocha-test task config
 */

'use strict';

module.exports = function() {
    return {
        ngServer: {
            options: {
                reporter: 'spec',
                require: 'ng/blanket.js'
            },
            src: [
                'ng/server.spec.js'
            ]
        },
        ngBlanket: {
            options: {
                reporter: 'html-cov',
                // use the quiet flag to suppress the mocha console output
                quiet: true,
                // specify a destination file to capture the mocha
                // output (the quiet option does not suppress this)
                captureFile: 'ng/coverage.server.html'
            },
            src: [
                'ng/server.spec.js'
            ]
        }
    };
};
