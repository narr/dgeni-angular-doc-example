/**
 * @ngdoc directive
 * @name awesome
 * @module dgeniNgDocTarget
 * @restrict A
 * @description
 * It is an awesome directive.
 * @example
<example module="awesomeExample" deps="null" animate="false">
    <file name="index.html">
        <div ng-controller="ExampleController as example">
            <div awesome></div>
        </div>
    </file>
    <file name="script.js">
        angular.module('awesomeExample', ['dgeniNgDocTarget']).controller('ExampleController', function() {
            var example = this;
        });
    </file>
</example>
 */
angular.module('dgeniNgDocTarget').directive('awesome', function() {
    'use strict';

    return {
        restrict: 'A',
        template: '<div class="awesome">This is an Awesome!</div>'
    };
});
