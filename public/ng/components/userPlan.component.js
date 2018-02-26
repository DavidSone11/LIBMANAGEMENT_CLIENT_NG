var app = angular.module('LIBAPP');

app.component('greetUser', {
    templateUrl: 'ng/components/userPlan.component.html',
    bindings: { name: '@' },
    controller: function($scope) {
        $scope.user = 'world';
    }
});