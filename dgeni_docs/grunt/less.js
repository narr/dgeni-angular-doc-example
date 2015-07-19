/*!
 * grunt-contrib-less config
 */

'use strict';

module.exports = function() {
    return {
        options: {
            compress: true,
            sourceMap: true,
            sourceMapRootpath: 'http://localhost:3000'
        },
        ngVendor: {
            options: {
                sourceMapBasepath: 'ng/client',
                sourceMapURL: 'vendor.css.map'
            },
            src: 'ng/client/app/vendor.less',
            dest: 'ng/client/.tmp/app/vendor.css'
        },
        ngApp: {
            options: {
                sourceMapBasepath: 'ng/client',
                sourceMapURL: 'app.css.map'
            },
            src: 'ng/client/app/app.less',
            dest: 'ng/client/.tmp/app/app.css'
        }
    };
};
