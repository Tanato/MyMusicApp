'use strict';

angular.module('myMusic')
  .component('library', {
    templateUrl: 'app/components/library/library.html',
    controllerAs: 'vm',
    bindings: {
      library: '<',
      user: '<',
      adicionar: '<',
      buscar: '<'
    },
    controller: function () {
      var vm = this;

      vm.isDisabled = function (id) {
        return vm.user && _.some(vm.user.playlist, {
          id: id
        });
      }
    }
  });