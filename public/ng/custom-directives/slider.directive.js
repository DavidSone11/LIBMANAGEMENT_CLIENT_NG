var app = angular.module('LIBAPP');
    app.directive('slider', function () {
      return {
         restrict: 'A',
         scope: true,
         controller: function ($scope, $element, $attrs) {
            $scope.onSlide = function (e, ui) {
              $scope.model = ui.value;

              $scope.$digest();
            };
         },
         link: function (scope, el, attrs) {

            var options = {
              slide: scope.onSlide
            };


            angular.element(document).ready(function () {
              scope.$slider = $(el).slider(options);
            });
         }
      };
  });