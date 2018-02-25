var app = angular.module('LIBAPP');
app.directive('dashboard', ['$compile', function($compile) {
        return {
            restrict: 'E',
            templateUrl: 'ng/directives/dashboard/dashboard.tmpl.html',
            replace: true,
            controller: function($scope) {


            }
        };
    }]);