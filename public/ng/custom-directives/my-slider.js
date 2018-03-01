angular.module('LIBAPP')
    .directive('my-slider', ['$timeout', function ($timeout) {
        return {
            restrict: 'E',
            scope: true,
            template: '<div id="{{ id }}">dasdas</div>',
            link: function ($scope) {
                $scope.id = String(Math.random()).substr(2, 8);

                $timeout(function () {
                    angular.element('#' + $scope.id).slider();
                },2000);
            }
        };
    }]);