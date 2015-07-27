angular.module('dgeniNgDocTarget')
    .service('modalService', function($modal) {
        'use strict';

        var that = this;
        that.oepn = function() {
            return $modal.open({
                templateUrl: 'components/modal/modal.html',
                controller: 'ModalCtrl as modal',
                backdrop: 'static'
            });
        };
    });
