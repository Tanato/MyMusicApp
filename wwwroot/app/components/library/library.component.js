'use strict';

angular.module('myMusic')
  .component('library', {
    templateUrl: 'app/components/library/library.html',
    controllerAs: 'vm',
    bindings: {
      model: '<',
      adicionar: '<',
      buscar: '<'
    },
    controller: function () {}
  });