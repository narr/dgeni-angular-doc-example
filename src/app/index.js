'use strict';

/**
 *
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
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
