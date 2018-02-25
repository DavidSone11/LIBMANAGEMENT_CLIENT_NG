var app = angular.module('LIBAPP');
app.directive('header', ['$compile', function($compile) {
        return {
            restrict: 'E',
            templateUrl: 'ng/directives/header/header.tmpl.html',
            replace: true,
            controller: function($scope) {


            }
        };
    }]);