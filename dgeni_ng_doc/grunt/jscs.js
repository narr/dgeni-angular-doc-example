'use strict';

module.exports = function() {
    return {
        clientType: {
            options: {
                config: '.jscsrc'
            },
            src: [
                'client/{app,components}/**/*.js',
                'test/e2e/**/*.spec.js'
            ]
        },
        serverType: {
            options: {
                config: 'server.jscsrc'
            },
            src: [
                'Gruntfile.js',
                'dgeni/**/*.js',
                '!dgeni/config/templates/**/*.js',
                'grunt/*.js',
                'server/**/*.js',
                'test/karma.conf.js',
                'test/blanket.js',
                'test/e2e/protractor.conf.js'
            ]
        }
    };
};
