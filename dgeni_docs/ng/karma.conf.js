'use strict';

module.exports = function(config) {
    config.set({
        basePath: 'client',
        browsers: ['PhantomJS'],
        exclude: [],
        files: [
            // src
            'bower_components/jquery/dist/jquery.js',
            'bower_components/angular/angular.js',
            'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
            'app/app.js',
            '.tmp/components/data/area-data.service.js',
            '.tmp/components/data/nav-data.service.js',
            'components/a.directive.js',
            'components/prettyprint/prettyprint.directive.js',
            'components/blurOnFocus.directive.js',
            'components/navbar/navbar.controller.js',
            'app/main/main.controller.js',
            '.tmp/templates.js',
            // for test
            'bower_components/angular-mocks/angular-mocks.js',
            'app/**/*.spec.js',
            'components/**/*.spec.js'
        ],
        frameworks: ['jasmine'],
        plugins: [
            'karma-jasmine',
            'karma-phantomjs-launcher'
        ]
    });
};
