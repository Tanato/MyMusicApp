'use strict';

angular.module('myMusic')
  .controller('MyMusicController', ['myMusicService', function (myMusicService) {

    var vm = this;

    myMusicService.getPlaylist('teste')
      .then(function (data) {
        vm.playlist = data;
      });

    myMusicService.getLibrary()
      .then(function (data) {
        vm.library = data;
      });

    vm.remover = function (id) {
      myMusicService.removeFromPlaylist(id)
        .then(function () {
          myMusicService.getPlaylist('tanato')
            .then(function (data) {
              vm.playlist = data;
            });
        });
    }

    vm.adicionar = function (id) {
      myMusicService.addToPlaylist(id)
        .then(function () {
          myMusicService.getPlaylist('tanato')
            .then(function (data) {
              vm.playlist = data;
            });
        });
    }

    vm.buscar = function (filter) {
      myMusicService.getLibrary(filter)
        .then(function (data) {
          vm.library = data;
        });
    }
  }]);