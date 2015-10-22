'use strict';

module.exports = function() {
    return {
        server: {
            options: {
                reporter: 'spec',
                require: 'test/blanket.js'
            },
            src: 'server/**/*.spec.js'
        },
        blanket: {
            options: {
                reporter: 'html-cov',
                // use the quiet flag to suppress the mocha console output
                quiet: true,
                // specify a destination file to capture the mocha
                // output (the quiet option does not suppress this)
                captureFile: 'test/coverage/server/index.html'
            },
            src: 'server/**/*.spec.js'
        }
    };
};
