'use strict';

angular.module('myMusic')
    .factory('myMusicService', ['$http', '$q', function ($http, $q) {

        var tempPlaylist = {
            user: {
                id: 1,
                name: 'tanato'
            },
            playlist: []
        };

        var tempLibrary = [{
            id: 1,
            nome: 'Two Minutes To Midnight',
            artista: {
                id: 1,
                nome: 'Iron Maiden'
            }
        }, {
            id: 2,
            nome: 'Aces High',
            artista: {
                id: 1,
                nome: 'Iron Maiden'
            }
        }];

        return {
            getPlaylist: getPlaylist,
            getLibrary: getLibrary,
            addToPlaylist: addToPlaylist,
            removeFromPlaylist: removeFromPlaylist,
        }

        function addToPlaylist(id) {
            var deferred = $q.defer();
            tempPlaylist.playlist.push(id)
            deferred.resolve(tempPlaylist);
            return deferred.promise;
        }

        function removeFromPlaylist(id) {
            var deferred = $q.defer();
            _.remove(tempPlaylist.playlist, {
                id: id
            });
            deferred.resolve(tempPlaylist);
            return deferred.promise;
        }

        function getPlaylist(filter) {
            var deferred = $q.defer();
            deferred.resolve(tempPlaylist);
            return deferred.promise;
        }

        function getLibrary(filter) {
            var deferred = $q.defer();
            if (!filter) {
                deferred.resolve(tempLibrary)
            } else {
                deferred.resolve(_.filter(tempLibrary, function (i) {
                    return _.includes(i, filter) || _.includes(i.artista, filter);
                }));
            }
            return deferred.promise;
        }

    }]);