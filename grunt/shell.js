/*!
 * grunt-shell task config
 */

'use strict';

module.exports = function(grunt, config) {
    return {
        startMongo: {
            command: 'mongod --dbpath ' + config.MONGODB
        },
        startServer: {
            command: 'node server/app.js'
        }
    };
};
