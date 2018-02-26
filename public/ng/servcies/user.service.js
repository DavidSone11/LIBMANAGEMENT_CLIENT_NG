/*jshint sub:true*/
var app = angular.module('LIBAPP');
app.service('UserService', function ($state, $cookies,GLOBALAPI,tokenFactory, $location, $http, $q, $window) {

    this.getUsers = function () {
        var deferred = $q.defer();
        $http.defaults.headers.common['Authorization'] = 'Basic ' + tokenFactory.getToken();
        $http.get(GLOBALAPI.getUserApi, {

        }).then(function (response) {
            deferred.resolve(response);
        }, function (error) {
            deferred.reject(error);
        });
        return deferred.promise;


    };

    this.removeUserByUpdate = function (id) {
        var deferred = $q.defer();
        $http.defaults.headers.common['Authorization'] = 'Basic ' + tokenFactory.getToken();
        $http.put(GLOBALAPI.removeUserApi+"/"+id, {

        }).then(function (response) {
            deferred.resolve(response);
        }, function (error) {
            deferred.reject(error);
        });
        return deferred.promise;


    };


});