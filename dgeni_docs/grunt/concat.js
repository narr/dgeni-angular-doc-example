/*!
 * grunt-contrib-concat task config
 */

'use strict';

module.exports = function(options) {
    return {
        ngExamples: {
            files: [
                {
                    src: options.ngExamples.src,
                    dest: 'ng/client/.tmp/examples/common/module.js'
                }
            ]
        }
    };
};
