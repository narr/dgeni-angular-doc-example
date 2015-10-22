'use strict';

module.exports = function() {
    return {
        dist: {
            src: [
                '<%= prodPath %>/client/favicon.ico',
                '<%= prodPath %>/client/{css,js}/**/*.{css,js}',
                '<%= prodPath %>/client/assets/**'
            ]
        },
        distExamples: {
            src: '<%= prodPath %>/client/examples/**/*.{css,js}'
        }
    };
};
