var app = angular.module('LIBAPP');
app.directive('privilege', ['$compile', function($compile) {
        return {
            restrict: 'E',
            templateUrl: 'ng/directives/privilege/privilege.tmpl.html',
            replace: true,
            controller: function($scope) {


            }
        };
    }]);