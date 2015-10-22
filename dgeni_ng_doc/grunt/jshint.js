'use strict';

module.exports = function() {
    return {
        options: {
            jshintrc: true
        },
        clientType: [
            'client/{app,components}/**/*.js',
            'test/e2e/**/*.spec.js'
        ],
        serverType: {
            options: {
                jshintrc: 'server.jshintrc'
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
