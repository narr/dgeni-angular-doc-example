angular.module('docApp')
    .controller('MainController', function($scope, $location, DOCS_NAVIGATION, $templateCache, $window) {

        'use strict';

        var main = this;
        var basePath = '/';

        main.currentArea = null;
        // main.partialPath = 'app/partials/index.html';

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
            var oldPath, area;

            oldPath = main.currentPath || "";

            main.currentPath = newPath;
            newPath = newPath.replace(new RegExp('^' + basePath), '');
            area = newPath.split('/')[0];
            main.currentArea = DOCS_NAVIGATION[area];

            // console.log(main.currentArea);
            // console.log(newPath);

            if (newPath === '' || newPath === 'index.html') {
                newPath = 'index';
            }
            if (!newPath.match(/\.html$/)) {
                newPath = newPath + '.html';
            }
            newPath = 'app/partials/' + newPath;

            // console.log(newPath + " && " + hash);

            if ($templateCache.get(newPath)) {
                main.currentHash = hash;
                main.partialPath = newPath;
            }
            else {
                // console.log(oldPath);
                // $location.path(oldPath).replace();

                // $location.path("file:///D:/Project/github/dgeni-tempate-example/dgeni_docs/ng/client/404.html");


                $window.location.href = "404.html";

                // console.log(location.href);
            }
        };

        $scope.$on('$locationChangeStart', function(e, args) {
            console.log('$locationChangeStart');
            main.changeCurrent($location.path(), $location.hash());
        });

        main.changeCurrent($location.path(), $location.hash());
    });
