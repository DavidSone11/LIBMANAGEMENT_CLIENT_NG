var app = angular.module('LIBAPP');
app.controller('dashboardCtrl', function($scope,$state,$stateParams) {
    $scope.message = $stateParams.message;
    console.log("Controller");

});