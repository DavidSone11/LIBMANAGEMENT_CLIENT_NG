/*jshint sub:true*/
var app = angular.module('LIBAPP');
app.service('UserService', function ($state, $cookies, $location, $http, $q, $window) {

    this.getUsers = function () {
        var deferred = $q.defer();
        var headers = {
            "Authorization": {
                'x-access-token': this.getToken()
            }
        };
        $http.get("http://localhost:4000/api/v1/getUsersByAllParams", {
            headers: headers
        }).then(function (response) {
            deferred.resolve(response);
        }, function (error) {
            deferred.reject(error);
        });
        return deferred.promise;


    };

    this.getToken = function () {
        return $window.sesstionStorage['token'];
    };
});