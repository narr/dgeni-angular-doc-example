'use strict';

// example tag deps attr means that Copy in any dependencies for this example

/**
 * @ngdoc directive
 * @name awesome
 * @restrict E
 * @module dgeniNgDocTarget
 *
 * @description
 *
 * It is an awesome directive.
 *
 * @example
<example module="awsomeExample" deps="null" animate="false">
    <file name="index.html">
        <div ng-controller="ExampleController as example">
           <awesome></awesome>
        </div>
    </file>
    <file name="script.js">
        angular.module('awsomeExample', ['dgeniNgDocTarget']).controller('ExampleController', function() {
        var example = this;
    });
    </file>
</example>
 *
 **/
angular.module('dgeniNgDocTarget').directive('awesome', function() {
    return {
        restrict: 'E',
        template: '<div class="awesome">This is an Awesome!</div>'
    };
});


// TODO: install ngix, tag info
