angular.module('docApp').controller('DocsCtrl', function($scope, $location, DOCS_NAVIGATION, $templateCache, $window) {
    'use strict';

    var docs = this;
    var basePath = '/';

    docs.currentArea = null;

    docs.navState = function(navItem) {
        var res = [];
        if (navItem.type === 'section') {
            res.push('nav-index-section');
        }
        if ('/' + navItem.href === docs.currentPath) {
            res.push('current');
        }
        return res;
    };

    docs.changeCurrent = function(newPath, hash) {
        var oldPath, area;

        oldPath = docs.currentPath || "";

        docs.currentPath = newPath;
        newPath = newPath.replace(new RegExp('^' + basePath), '');
        area = newPath.split('/')[0];
        docs.currentArea = DOCS_NAVIGATION[area];

        // console.log(docs.currentArea);
        // console.log(newPath);

        if (newPath === '' || newPath === 'index.html') {
            newPath = 'index';
        }
        if (!newPath.match(/\.html$/)) {
            newPath = newPath + '.html';
        }
        newPath = 'app/partials/' + newPath;

        // console.log(newPath + " && " + hash);

        if($templateCache.get(newPath)) {
            docs.currentHash = hash;
            docs.partialPath = newPath;
        }
        else {
            // console.log(oldPath);
            // $location.path(oldPath).replace();

            // $location.path("file:///D:/Project/github/dgeni-tempate-example/dgeni_docs/ng/client/404.html");


            $window.location.href = "404.html";

            // console.log(location.href);
        }




    };

    $scope.$on('$locationChangeStart', function(e, arg) {
        docs.changeCurrent($location.path(), $location.hash());
    });
});
