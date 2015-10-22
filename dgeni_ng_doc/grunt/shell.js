'use strict';

module.exports = function(options) {
    return {
        runTargetServer: {
            command: [
                'cd ' + options.targetPath,
                'bower install',
                'cd ../',
                'npm install',
                'node target_server'
            ].join('&&')
        },
        targetBower: {
            command: [
                'cd ' + options.targetPath,
                'bower install'
            ].join('&&')
        },
        docBower: {
            command: [
                'cd client',
                'bower install'
            ].join('&&')
        },
        karma: {
            command: [
                'node_modules/karma/bin/karma start test/karma.conf.js'
            ].join('&&')
        },
        installDistDep: {
            command: [
                'cd <%= prodPath %>',
                'npm install'
            ].join('&&')
        },
        runDistServer: {
            command: [
                'cd <%= prodPath %>',
                'export PORT=8080',
                'node server/server'
            ].join('&&')
        }
    };
};
