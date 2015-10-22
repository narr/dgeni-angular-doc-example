'use strict';

module.exports = function() {
    return {
        options: {
            compress: true,
            sourceMap: true,
            sourceMapRootpath: '../../..'
        },
        vendor: {
            options: {
                sourceMapURL: 'vendor.css.map'
            },
            src: 'client/app/vendor.less',
            dest: 'client/.tmp/app/vendor.css'
        },
        app: {
            options: {
                sourceMapURL: 'app.css.map'
            },
            src: 'client/app/app.less',
            dest: 'client/.tmp/app/app.css'
        }
    };
};
