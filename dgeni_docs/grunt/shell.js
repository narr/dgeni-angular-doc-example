/*!
 * grunt-shell task config
 */

'use strict';

module.exports = function(options) {
    return {
        srcBower: {
            command: [
                'cd ' + options.targetPath,
                'bower install'
            ].join('&&')
        },
        ngBower: {
            command: [
                'cd ng/client',
                'bower install'
            ].join('&&')
        }
    };
};
