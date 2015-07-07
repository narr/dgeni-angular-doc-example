/*!
 * grunt-contrib-less config
 */

'use strict';

module.exports = function(grunt, config) {

    return {
        options: {
            // cleancss: true, // cssmin
            // cleancssOptions: {
            //     keepBreaks: true
            // },
            compress: true
        },
        docNg: {
            files: [
                {
                    src: '<%= docPath.src %>/ng/app/vendor.less',
                    dest: '<%= docPath.src %>/ng/.tmp/app/vendor.css'
                },
                {
                    src: '<%= docPath.src %>/ng/app/app.less',
                    dest: '<%= docPath.src %>/ng/.tmp/app/app.css'
                }
            ]
        }
    };
};
