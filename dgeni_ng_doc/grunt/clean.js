'use strict';

module.exports = function() {
    return {
        dev: {
            src: [
                'client/.tmp',
                'test/coverage'
            ]
        },
        build: {
            options: {
                force: true
            },
            src: '<%= prodPath %>'
        }
    };
};
