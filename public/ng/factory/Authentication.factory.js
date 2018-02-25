var app = angular.module('LIBAPP');
app.factory('AuthenticationFactory', function ($state, $cookies, $location, $http, $window) {
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

    };
});