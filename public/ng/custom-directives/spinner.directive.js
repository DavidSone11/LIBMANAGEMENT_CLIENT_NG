var app = angular.module('LIBAPP');
app.directive('spinner', function() {
    return {
        restrict: 'A',
        controller: ['$scope', '$element', '$attrs', function($scope, $element, $attrs) {
            var spinner = $('<div class="spinnerContainer"><div class="spinner"></div></div>').insertAfter($element);
            spinner.hide().fadeIn("slow");
            $element.hide();
            $scope.$watch($attrs.spinner, function(data) {
                if (data) {
                    spinner.fadeOut("slow");
                    $element.fadeIn("slow");
                } else {
                    spinner.fadeIn("slow");
                    $element.fadeOut("slow");
                }
            });
        }]
    };
});