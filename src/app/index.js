/**
 * @ngdoc module
 * @name dgeniNgDocTarget
 * @module dgeniNgDocTarget
 * @packageName dgeni-ng-doc-target
 * @description
 * This is a ng doc target application module.
 */
angular.module('dgeniNgDocTarget', ['ngRoute', 'ui.bootstrap'])
    .config(function($locationProvider, $routeProvider, messageProvider) {
        'use strict';

        // $locationProvider.hashPrefix('!'); // no HTML5 Mode
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: true,
            rewriteLinks: true // intercepts all links and never performs a full page reload
        });

        $routeProvider
            .when('/', {
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl as main'
            })
            .otherwise({
                redirectTo: '/'
            });

        messageProvider.put('msg1', '\'Allo, \'Allo!!');
    });
