angular.module('docApp').controller('NavbarController', function(DOCS_NAVIGATION, $interval) {
    'use strict';

    var navbar, areas;
    navbar = this;
    navbar.areas = areas = [];
    angular.forEach(DOCS_NAVIGATION, function(v, k) {
        areas.push({
            id: k,
            name: v.name,
            href: k
        });
    });
    // navbar.isCollapsed = true;
    navbar.date = new Date();
    $interval(function() {
        navbar.date = new Date();
    }, 1000);
});
