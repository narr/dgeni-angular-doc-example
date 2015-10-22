describe('MainController', function() {
    'use strict';

    var $scope, $controller;

    beforeEach(module('docApp'));
    beforeEach(inject(function(_$rootScope_, _$controller_) {
        $scope = _$rootScope_.$new();
        $controller = _$controller_;
    }));

    describe('navState', function() {
        it('should return Array', function() {
            var controller;
            controller = $controller('MainController', {$scope: $scope});
            expect(angular.isArray(controller.navState({}))).toBeTruthy();
        });
    });
});
