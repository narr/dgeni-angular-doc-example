'use strict';

module.exports = function(options) {
    return {
        examplesCommonModule: {
            src: options.examplesCommonModule.src,
            dest: 'client/.tmp/examples/common/module.js'
        }
    };
};
