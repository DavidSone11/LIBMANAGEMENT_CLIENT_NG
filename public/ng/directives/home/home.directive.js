var app = angular.module('LIBAPP');
app.directive('home', ['$compile', function($compile) {
        return {
            restrict: 'E',
            templateUrl: 'ng/directives/home/home.tmpl.html',
            replace: true,
            controller: function($scope,$state,AuthenticationFactory) {
                if(!$state.current|| ($state.current && $state.current.name != 'login' && !AuthenticationFactory.isLoggedIn())){
                    $state.go('login');
                }

            }
        };
    }]);