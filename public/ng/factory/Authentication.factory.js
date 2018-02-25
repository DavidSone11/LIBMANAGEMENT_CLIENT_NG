var app = angular.module('LIBAPP');
app.factory('AuthenticationFactory', function ($state, $cookies, $location, $http, $q, $base64, $window) {
    return {
        isLogged: false,
        isLoggedIn: function () {
            if ($window.sessionStorage.token && $window.sessionStorage.username) {
                this.isLogged = true;
            } else {
                this.isLogged = false;
                delete this.username;
            }
            return (this.isLogged) ? this.isLogged : false;
        },

        doLogin: function (username, password) {
            var successOBJ = {};
            var deferred = $q.defer();
            delete $http.defaults.headers.common['X-Requested-With'];
            var headers = {"Authorization": "Basic " + $base64.encode(username + ":" + password)};
            $http.post("http://localhost:4000/login", {
                withCredentials: true,
                headers: headers
            }).then(function (response) {
                deferred.resolve(response);
            }, function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        },
        doLogout: function () {

            if (this.isLogged) {

                this.isLogged = false;
                delete this.user;
                delete this.userRole;
                //delete $window.sessionStorage.userPlan;
                delete $window.sessionStorage.token;
                delete $window.sessionStorage.username;
                delete $window.sessionStorage.role;

                $cookies = {};

                $state.go("login");
            }

        }


    };
});