angular.module('dgeniNgDocTarget')
    .controller('ModalCtrl', function($modalInstance) {
        'use strict';

        var that = this;
        that.items = ['awesome', 'cool', 'brilliant'];
        that.selected = {
            item: that.items[0]
        };
        that.ok = function() {
            $modalInstance.close(that.selected.item);
        };
        that.cancel = function() {
            $modalInstance.dismiss('cancel');
        };
    });
