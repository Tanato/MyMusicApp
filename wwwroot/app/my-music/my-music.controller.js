'use strict';

angular.module('myMusic')
  .controller('MyMusicController', ['myMusicService', function (myMusicService) {

    var vm = this;

    myMusicService.getLibrary()
      .then(function (data) {
        vm.library = data;
      });

    myMusicService.getUserPlaylist('tanato')
      .then(function (data) {
        vm.user = data;
      });

    vm.buscar = function (filter) {
      myMusicService.getLibrary(filter)
        .then(function (data) {
          vm.library = data;
        });
    }

    vm.remover = function (id) {
      myMusicService.removeFromPlaylist(id)
        .then(function () {
          myMusicService.getUserPlaylist('tanato')
            .then(function (data) {
              vm.user = data;
            });
        });
    }

    vm.adicionar = function (id) {
      myMusicService.addToPlaylist(id)
        .then(function () {
          myMusicService.getUserPlaylist('tanato')
            .then(function (data) {
              vm.user = data;
            });
        });
    }
  }]);