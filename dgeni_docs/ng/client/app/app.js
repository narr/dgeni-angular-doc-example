/*!
 * Doc App(referred to https://github.com/angular/angular.js/tree/master/docs)
 */
(function(angular) {
    'use strict';

    angular.module('docApp', ['ui.bootstrap'])
        .constant('DOCS_OVERWRITELINK', angular.element('base').length < 1)
        .config(function($locationProvider, DOCS_OVERWRITELINK) {
            if (!DOCS_OVERWRITELINK) {
                $locationProvider.html5Mode({
                    enabled: true,
                    requireBase: true,
                    rewriteLinks: true
                });
            }
        });

})(angular);
