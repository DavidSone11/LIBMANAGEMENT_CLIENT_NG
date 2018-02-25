var app = angular.module('LIBAPP');
app.directive('home', ['$compile', function($compile) {
        return {
            restrict: 'E',
            templateUrl: 'ng/directives/home/home.tmpl.html',
            replace: true,
            controller: function($scope) {


            }
        };
    }]);