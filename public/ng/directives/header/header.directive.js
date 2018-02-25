var app = angular.module('LIBAPP');
app.directive('header', ['$compile', function($compile) {
        return {
            restrict: 'E',
            templateUrl: 'ng/directives/header/header.tmpl.html',
            replace: true,
            controller: function($scope,AuthenticationFactory,$state) {

                $scope.logout = function(){
                    AuthenticationFactory.doLogout().then(function(res){

                        $state.go("login");
                    });
                };
            }
        };
    }]);