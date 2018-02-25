var app = angular.module('LIBAPP');
app.directive('user', ['$compile', function($compile) {
        return {
            restrict: 'E',
            templateUrl: 'ng/directives/user/user.tmpl.html',
            replace: true,
            controller: function($scope) {


            }
        };
    }]);