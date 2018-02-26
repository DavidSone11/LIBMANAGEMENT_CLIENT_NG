' use strict';
var app = angular.module('LIBAPP');
app.controller('loginCtrl', function ($scope, $window, $state, AuthenticationFactory) {
    $scope.login = function (username, password) {
        console.log(username + "" + password);
        if (username != '' || password != '') {

            AuthenticationFactory.doLogin(username, password).then(function (res) {

                AuthenticationFactory.isLogged = true;
                AuthenticationFactory.user = res.data.username;
                AuthenticationFactory.userRole = res.data.role;
                $window.sessionStorage.token = res.data.token;
                $window.sessionStorage.user = res.data.username;
                $window.sessionStorage.userRole = res.data.role;
                $window.sessionStorage.userplan = res.data.userPlan;
                $state.go("dashboard.home", {
                    'message': 'Welcome to Dashboard'
                });
            });

        }
    };

});