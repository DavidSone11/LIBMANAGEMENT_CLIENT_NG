' use strict';
var app = angular.module('LIBAPP');
app.controller('loginCtrl', function ($scope, $window, $state, AuthenticationFactory,$timeout) {
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


                angular.element(document.querySelector('[id="login-wrapper"]')).animate({
                    opacity: '0',
                }).hide();
                angular.element(document.querySelector('[id="login-loading-bar"]')).animate({
                    opacity: '1',
                }).show();

                var goTodashboard = function() {
                    $state.go("dashboard.home", {
                        'message': 'Welcome to Dashboard'
                    });
                  };

                  $timeout(goTodashboard, 5000);

            });

        }
    };

});