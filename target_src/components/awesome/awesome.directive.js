/**
 * @ngdoc directive
 * @name awesome
 * @module dgeniNgDocTarget
 * @restrict A
 * @description
 * It is an awesome directive.
 * @example
<example data-module="awesomeExample" deps="null">
    <file name="index.html">
        <div data-ng-controller="ExampleController as example">
            <div data-awesome></div>
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
