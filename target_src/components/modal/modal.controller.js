angular.module('dgeniNgDocTarget')
    .controller('ModalCtrl', function($uibModalInstance) {
        'use strict';

        var that = this;
        that.items = ['awesome', 'cool', 'brilliant'];
        that.selected = {
            item: that.items[0]
        };
        that.ok = function() {
            $uibModalInstance.close(that.selected.item);
        };
        that.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    });
