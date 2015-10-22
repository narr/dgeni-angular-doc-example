angular.module('dgeniNgDocTarget')
    .controller('NavbarCtrl', function() {
        'use strict';

        var that = this;
        that.isCollapsed = true;
        that.activeClass = "Home";
        that.date = new Date();
    });
