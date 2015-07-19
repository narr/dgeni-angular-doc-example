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




        startServer: {
            command: 'node server/app.js'
        },
        docNgBower: {
            command: 'init npm install && bower install'
        }
    };
};
