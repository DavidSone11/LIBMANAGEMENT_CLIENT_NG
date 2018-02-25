var app = angular.module('LIBAPP');
app.directive('sidebar', ['$compile', function($compile) {
        return {
            restrict: 'E',
            templateUrl: 'ng/directives/sidebar/sidebar.tmpl.html',
            replace: true,
            controller: function($scope) {


            }
        };
    }]);