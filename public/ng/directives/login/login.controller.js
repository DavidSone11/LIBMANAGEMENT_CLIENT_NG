' use strict';
var app = angular.module('LIBAPP');
app.controller('loginCtrl', function ($scope, $window,$state) {
    $scope.login = function (username, password) {
        console.log(username + "" + password);
        if(username!=''||password!=''){
            //$window.location.href ="/";
            $state.go("dashboard.home", {'message': 'Welcome to Dashboard'});
        }
    };

});