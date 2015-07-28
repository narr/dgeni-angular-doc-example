angular.module('docApp').controller('NavbarCtrl', function(DOCS_NAVIGATION) {
    'use strict';

    var navbar = this;
    navbar.areas = [];
    angular.forEach(DOCS_NAVIGATION, function(v, k) {
        navbar.areas.push({
            id: k,
            name: v.name,
            href: k
        });
    });
    navbar.date = new Date();
});
