angular.module('dgeniNgDocTarget')
    .service('modalService', function($uibModal) {
        'use strict';

        var that = this;
        that.oepn = function() {
            return $uibModal.open({
                templateUrl: 'components/modal/modal.html',
                controller: 'ModalCtrl as modal',
                backdrop: 'static'
            });
        };
    });
