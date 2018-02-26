var app = angular.module('LIBAPP');
app.directive('header', ['$compile', function ($compile) {
    return {
        restrict: 'E',
        templateUrl: 'ng/directives/header/header.tmpl.html',
        replace: true,
        controller: function ($scope, AuthenticationFactory, $state) {
            var toggle = false;

            $scope.logout = function () {
                AuthenticationFactory.doLogout().then(function (res) {

                    $state.go("login");
                });
            };


            $scope.enableSidebar = function () {
                $scope.tooltipMessage = 'Show Sidebar!';
                toggle = !toggle;
                if (toggle) {

                    angular.element(document.querySelector('[id="side-menu"]')).animate({
                        left: '-300px',
                        width: '0px',
                        opacity: '1',
                    }, "slow").fadeIn();
                    angular.element(document.querySelector('[id="page-wrapper"]')).animate({
                        margin: '0px 0px 0px 0px',
                        opacity: '1',
                    }, "slow").fadeIn();



                } else {

                    angular.element(document.querySelector('[id="page-wrapper"]')).animate({
                        margin: '0 0 0 250px',
                        padding: '0 30px',
                    }, "slow");

                    angular.element(document.querySelector('[id="side-menu"]')).animate({
                        left: '0px',
                        width: '245px',
                        opacity: '1',
                    }, "slow");



                }


            };
        }
    };
}]);