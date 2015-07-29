angular.module('docApp').controller('NavbarController', function(DOCS_NAVIGATION) {
    'use strict';

    var navbar = this;
    navbar.areas = [];
    navbar.isCollapsed = true;
    angular.forEach(DOCS_NAVIGATION, function(v, k) {
        navbar.areas.push({
            id: k,
            name: v.name,
            href: k
        });
    });
    navbar.date = new Date();
});
