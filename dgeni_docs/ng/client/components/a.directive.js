angular.module('docApp').directive('a', function(DOCS_OVERWRITELINK, DOCS_AREA_DATA) {
    'use strict';

    var linkCache;

    function isRewrite(link) {
        var res, navGroup, docAreaData, i, len;
        if (link.indexOf('#/') > -1) {
            return false;
        }
        else if (link === '.') {
            return true;
        }
        res = false;
        navGroup = link.split('/')[0];
        docAreaData = DOCS_AREA_DATA;
        for (i = 0, len = docAreaData.length; i < len; i++) {
            if (navGroup === docAreaData[i]) {
                res = true;
                break;
            }
        }
        return res;
    }

    linkCache = {};

    return {
        restrict: 'E',
        link: function($scope, $elem, $attrs) {
            if (!DOCS_OVERWRITELINK) {
                return;
            }
            $scope.$evalAsync(function(scope) {
                var link, newLink;
                link = $elem.attr('href');
                newLink = linkCache[link];
                if (!newLink) {
                    if (isRewrite(link)) {
                        newLink = '#/' + link;
                        linkCache[link] = newLink;
                    }
                }
                $elem.attr('href', newLink);
            });
        }
    };
});
