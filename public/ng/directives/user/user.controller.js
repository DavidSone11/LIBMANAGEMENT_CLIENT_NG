var app = angular.module('LIBAPP');
app.controller('userCtrl', function($scope,UserService,GLOBALAPI) {




    $scope.getUsersList  = function(){

        console.log(GLOBALAPI.loginUrl);
        UserService.getUsers().then(function success(response){

            console.log(response);

        },function error(response){

        });

    };

    $scope.getUsersList();


});