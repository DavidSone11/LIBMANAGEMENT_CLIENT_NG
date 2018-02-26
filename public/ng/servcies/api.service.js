/*jshint sub:true*/
var app = angular.module('LIBAPP');
app.service('ApiService', function ($state, $cookies, $location, $http, $q, $window) {
    return {
        loginUrl : 'http://localhost:4000/login',
        logOutUrl : 'http://localhost:4000/logout'
    };
});