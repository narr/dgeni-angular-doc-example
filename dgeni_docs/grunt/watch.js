/*!
 * grunt-contrib-watch task config
 */

'use strict';

module.exports = function() {
    return {
        options: {
            interrupt: true,
            livereload: true
        },
        ngLessVendor: {
            files: 'ng/client/app/vendor.less',
            tasks: 'less:ngVendor'
        },
        ngLessApp: {
            files: [
                'ng/client/components/navBar/navbar.less',
                'ng/client/components/prettyprint/prettyprint.less',
                'ng/client/app/app.less',
                'ng/client/app/main/main.less',
                'ng/client/app/examples/runnableExample.less'
            ],
            tasks: 'less:ngApp'
        },
        ngTemplates: {
            files: [
                'ng/client/app/**/*.html',
                'ng/client/components/**/*.html'
            ],
            tasks: 'doNgTemplates'
        },
        ngJasmine: {
            files: [
                'ng/client/**/*.js',
                '!ng/client/bower_components/**/*.js'
            ],
            tasks: 'karma:jasmineNg'
        }
    };
};
