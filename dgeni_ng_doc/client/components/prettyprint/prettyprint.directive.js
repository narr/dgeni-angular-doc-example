angular.module('docApp').directive('pre', function() {
    'use strict';

    return {
        restrict: 'E',
        link: function($scope, $elem, $attrs) {
            var $code, formatted;
            $code = $elem.find('>code');
            formatted = prettyPrintOne($code.html());
            $code.html(formatted);
            $elem.addClass('prettyprint');
        }
    };
});
