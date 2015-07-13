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
            requireBase: false,
            rewriteLinks: true
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
