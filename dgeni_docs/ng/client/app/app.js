/*!
 * Doc App
 */
(function(angular) {

    'use strict';

    angular.module('docApp', ['ui.bootstrap'])
        .constant('DOCS_OVERWRITELINK', angular.element('base').length < 1)
        //.provider('DOCS_OVERWRITELINK', function(DOCS_OVERWRITELINK) {
        //    return {
        //        $get: function() {
        //            return DOCS_OVERWRITELINK;
        //        }
        //    };
        //})
        .config(function($locationProvider, DOCS_OVERWRITELINK) {
            if (!DOCS_OVERWRITELINK) {
                $locationProvider.hashPrefix('!');
                $locationProvider.html5Mode({
                    enabled: true,
                    requireBase: false,
                    rewriteLinks: true
                });
            }
        });

})(angular);
