/*!
 * grunt-contrib-less config
 */

'use strict';

module.exports = function() {
    return {
        options: {
            // cleancss: true, // cssmin
            // cleancssOptions: {
            //     keepBreaks: true
            // },
            compress: true,
            sourceMap: true // /*# sourceMappingURL=http://localhost:63342/dgeni-tempate-example/dgeni_docs/ng/.tmp/app/vendor.css.map */
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
