/*jshint sub:true*/
var app = angular.module('LIBAPP');
app.factory('tokenFactory', function ($window) {
    return {
        getToken: function () {
            return $window.sessionStorage['token'];
        }
    };
});