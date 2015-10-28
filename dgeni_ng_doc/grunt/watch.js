'use strict';

module.exports = function() {
    return {
        options: {
            interrupt: true,
            livereload: true
        },
        lessVendor: {
            files: 'client/app/vendor.less',
            tasks: 'less:vendor'
        },
        lessApp: {
            files: [
                'client/components/navBar/navbar.less',
                'client/components/prettyprint/prettyprint.less',
                'client/app/app.less',
                'client/app/main/main.less',
                'client/app/examples/runnableExample.less'
            ],
            tasks: 'less:app'
        },
        templates: {
            files: 'client/{app,components}/**/*.html',
            tasks: 'doTemplates'
        },
        jasmine: {
            files: 'client/{app,components}/**/*.js',
            tasks: 'shell:karma'
        },
        mocha: {
            files: 'server/**/*.js',
            tasks: 'mocha'
        }
    };
};
