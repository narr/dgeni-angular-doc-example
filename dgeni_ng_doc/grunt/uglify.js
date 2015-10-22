'use strict';

module.exports = function() {
    return {
        distExamples: {
            options: {
                sourceMap: true,
                sourceMapIncludeSources: true
            },
            expand: true,
            cwd: 'client/.tmp/examples',
            src: '**/{module.js,script.js}',
            dest: '<%= prodPath %>/client/examples'
        }
    };
};
