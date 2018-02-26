var app = angular.module('LIBAPP');
app.controller('userCtrl', function($scope,UserService) {




    $scope.getUsersList  = function(){
        UserService.getUsers().then(function success(response){

            console.log(response);

        },function error(response){

        });

    };

    $scope.getUsersList();


});