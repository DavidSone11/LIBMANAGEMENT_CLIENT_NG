var app = angular.module('LIBAPP');
app.directive('role', ['$compile', function($compile) {
        return {
            restrict: 'E',
            templateUrl: 'ng/directives/role/role.tmpl.html',
            replace: true,
            controller: function($scope) {


            }
        };
    }]);