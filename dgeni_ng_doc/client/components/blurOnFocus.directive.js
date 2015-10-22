angular.module('docApp').directive('blurOnFocus', function() {
    'use strict';

    return {
        restrict: 'A',
        link: function($scope, $elem, $attrs) {
            $elem.on('focus', function() {
                $elem.blur();
            });
        }
    };
});
