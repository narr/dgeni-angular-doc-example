'use strict';

/**
 * @ngdoc module
 * @name dgeniNgDocTarget
 * @module dgeniNgDocTarget
 * @packageName dgeni-ngdoc-example
 * @description
 *
 * This is a ngdoc example application module.
 *
 **/
angular.module('dgeniNgDocTarget', ['ngRoute'])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false,
            rewriteLinks: true
        });
    });
    // .config(function($locationProvider) {
    //     // $locationProvider.hashPrefix('!');
    //     $locationProvider.html5Mode({
    //         enabled: true,
    //         requireBase: false,
    //         rewriteLinks: true
    //     });
    // });
