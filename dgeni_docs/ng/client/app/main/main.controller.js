angular.module('docApp').
    controller('MainController',
    function($scope, $location, DOCS_NAVIGATION, $templateCache, $window) {
        'use strict';

        var main;
        main = this;

        main.navState = function(navItem) {
            var res = [];
            if (navItem.type === 'section') {
                res.push('nav-index-section');
            }
            if ('/' + navItem.href === main.currentPath) {
                res.push('current');
            }
            return res;
        };

        main.changeCurrent = function(newPath, hash) {
            var currentNavGroup, partialPath;

            main.currentPath = newPath; // a path following base path  e.g. /guide/howToUse
            currentNavGroup = newPath.split('/')[1]; // the current nav group  e.g. api, guide
            main.currentArea = DOCS_NAVIGATION[currentNavGroup];

            if (newPath === '/') {
                partialPath = 'app/partials/index.html';
                main.partialPath = partialPath;
                main.currentHash = hash;
            }
            else {
                partialPath = 'app/partials' + newPath + '.html';
                if ($templateCache.get(partialPath)) {
                    main.partialPath = partialPath;
                    main.currentHash = hash;
                }
                else {
                    $window.location.href = '404.html';
                }
            }
            // console.log(newPath);
        };

        $scope.$on('$locationChangeStart', function(e, args) {
            // console.log('$locationChangeStart..!!');
            main.changeCurrent($location.path(), $location.hash());
        });

        main.changeCurrent($location.path(), $location.hash()); // init
    });
