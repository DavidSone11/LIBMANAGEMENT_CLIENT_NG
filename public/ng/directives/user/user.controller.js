var app = angular.module('LIBAPP');
app.controller('userCtrl', function ($scope, UserService, GLOBALAPI) {

    $scope.userList = [];


    $scope.getUsersList = function () {
        UserService.getUsers().then(function success(response) {
            $scope.userList = response.data.results;
        }, function error(response) {

        });

    };

    $scope.getUsersList();

    $scope.removeUser = function (user) {

        UserService.removeUserByUpdate(user._id).then(function success(response) {
            var userIndex = $scope.userList.indexOf(user);
            $scope.userList.splice(userIndex, 1);
        }, function error(response) {

        });

    };

    $scope.updateUser = function (user) {

        console.log(user);

    }


});