/*!
 * grunt-filerev task config
 */

'use strict';

module.exports = function() {
    return {
        ng: {
            src: [
                '<%= prodPath %>/ng/client/favicon.ico',
                '<%= prodPath %>/ng/client/{css,js}/**/*.{css,js}',
                '<%= prodPath %>/ng/client/assets/**'
            ]
        },
        ngExamples: {
            src: '<%= prodPath %>/ng/client/examples/**/*.{css,js}'
        }
    };
};
