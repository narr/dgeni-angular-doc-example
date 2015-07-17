/*!
 * grunt-shell task config
 */

'use strict';

module.exports = function() {
    return {
        bower: {
            command: [
                'cd src',
                'bower install',
                'cd ../dgeni_docs/ng',
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
