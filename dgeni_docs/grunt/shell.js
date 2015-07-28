/*!
 * grunt-shell task config
 */

'use strict';

module.exports = function() {
    return {
        ngBower: {
            command: [
                'cd ng/client',
                'bower install',
                'cd ../..'
            ].join('&&')
        },




        ngServerDev: {
            command: 'node server/app.js'
        }
    };
};
