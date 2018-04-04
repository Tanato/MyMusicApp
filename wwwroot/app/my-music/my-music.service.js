'use strict';

angular.module('myMusic')
    .factory('myMusicService', ['$http', '$q', function ($http, $q) {

        var tempUser = {
            user: {
                id: 1,
                nome: 'Tanato'
            },
            playlist: []
        };

        return {
            getLibrary: getLibrary,
            getUserPlaylist: getUserPlaylist,
            addToPlaylist: addToPlaylist,
            removeFromPlaylist: removeFromPlaylist,
        }

        function getLibrary(filter) {
            return $http.get('http://localhost:5000/api/Musicas/' + filter)
                .then(function (response) {
                    return response.data
                });
        }

        function getUserPlaylist(filter) {
            var deferred = $q.defer();
            deferred.resolve(tempUser);
            return deferred.promise;
        }

        function addToPlaylist(id) {
            var deferred = $q.defer();
            tempUser.playlist.push(id)
            deferred.resolve(tempUser);
            return deferred.promise;
        }

        function removeFromPlaylist(id) {
            var deferred = $q.defer();
            _.remove(tempUser.playlist, {
                id: id
            });
            deferred.resolve(tempUser);
            return deferred.promise;
        }
    }]);