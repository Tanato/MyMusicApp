'use strict';

angular.module('myMusic')
  .controller('MyMusicController', ['myMusicService', function (myMusicService) {

    var vm = this;

    myMusicService.getLibrary()
      .then(function (data) {
        vm.library = data;
      });

    myMusicService.getUserPlaylist('default')
      .then(function (data) {
        vm.playlist = data;
      });

    vm.buscarLibrary = function (filter) {
      myMusicService.getLibrary(filter)
        .then(function (data) {
          vm.library = data;
        });
    }

    vm.buscarUserPlaylist = function (filter) {
      myMusicService.getUserPlaylist(filter)
        .then(function (data) {
          vm.playlist = data;
        });
    }

    vm.remover = function (playlistId, musica) {
      myMusicService.removeFromPlaylist(playlistId, musica)
        .then(function () {
          myMusicService.getUserPlaylist(vm.playlist.usuario.nome)
            .then(function (data) {
              vm.playlist = data;
            });
        });
    }

    vm.adicionar = function (playlistId, musica) {
      myMusicService.addToPlaylist(playlistId, musica)
        .then(function () {
          myMusicService.getUserPlaylist(vm.playlist.usuario.nome)
            .then(function (data) {
              vm.playlist = data;
            });
        });
    }
  }]);