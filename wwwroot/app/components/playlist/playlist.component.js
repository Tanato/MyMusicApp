'use strict';

angular.module('myMusic')
  .component('playlist', {
    templateUrl: 'app/components/playlist/playlist.html',
    controllerAs: 'vm',
    bindings: {
      model: '<',
      remover: '<'
    },
    controller: function () {
      var vm = this;
    }
  });