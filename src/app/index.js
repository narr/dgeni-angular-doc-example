'use strict';

/**
 * @ngdoc module
 * @name dgeniNgDocTarget
 * @module dgeniNgDocTarget
 * @packageName dgeni-ng-doc-target.app
 * @description
 * This is a ng doc target application module.
 **/
angular.module('dgeniNgDocTarget', ['ngRoute'])
    .config(function($locationProvider, $routeProvider) {
        // $locationProvider.hashPrefix('!'); // no HTML5 Mode
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false,
            rewriteLinks: true
        });

        $routeProvider
            .when('/', {
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
