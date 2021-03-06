
/*jshint sub:true*/
var angular_injector = angular.injector(['ng']);
var https = angular_injector.get('$http');


var app = angular.module('LIBAPP', [
    "ngCookies",
    "ngMessages",
    "oc.lazyLoad",
    "ui.router",
    "base64",
    "angular-loading-bar",
    // 'toastr',
    "ngAnimate",
    "ngResource"
]);

app.value('loginUrl', 'http://localhost:4000/login');
app.value('logOutUrl', 'http://localhost:4000/logout');

app.constant('GLOBALAPI', {
    'loginUrl' : 'http://localhost:4000/login',
    'logOutUrl': 'http://localhost:4000/logout',
    "getUserApi":"http://localhost:4000/api/v1/user/getUsersByAllParams",
    "removeUserApi":"http://localhost:4000/api/v1/user/removeUserByUpadte"

});



app.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$httpProvider',
    function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $httpProvider) {

        $ocLazyLoadProvider.config({
            debug: false,
            events: true,
        });

        $httpProvider.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';


        $urlRouterProvider.otherwise('/login');
      //  $urlRouterProvider.otherwise('/dashboard/home');
        $stateProvider
        .state('login', {
            templateUrl: 'ng/directives/login/login.directive.html',
            url: '/login',
            controller:"loginCtrl",
            resolve: {
                loadMyDirectives: function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'LIBAPP',
                        files: [
                            'ng/directives/login/login.directive.js',
                            'ng/directives/login/login.controller.js',
                            'ng/factory/Authentication.factory.js',


                        ]
                    });
                }
            }
        }).state('dashboard', {
                templateUrl: 'ng/directives/dashboard/dashboard.directive.html',
                url: '/dashboard',
                params: {message: null},
                controller:"dashboardCtrl",
                resolve: {
                    loadMyDirectives: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'LIBAPP',
                            files: [
                                'ng/directives/dashboard/dashboard.directive.js',
                                'ng/directives/dashboard/dashboard.controller.js',
                                'ng/directives/sidebar/sidebar.directive.js',
                                'ng/directives/header/header.directive.js',
                                'ng/factory/Authentication.factory.js',
                                'ng/factory/token.factory.js',
                                'ng/servcies/user.service.js',
                                'ng/utility/current.state.prototype.js',
                                'ng/utility/capitalizeFirstLetter.prototype.js',
                                'ng/components/userPlan.component.js',
                                'ng/custom-directives/slider.directive.js',
                                'ng/custom-directives/my-slider.js'

                            ]
                        });
                    }
                }
            }).state('dashboard.home',{
                url:'/home',
                controller: 'homeCtrl',
                templateUrl:'ng/directives/home/home.directive.html',
                resolve: {
                  loadMyFiles:function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                      name:'LIBAPP',
                      files:[
                        'ng/directives/home/home.directive.js',
                        'ng/directives/home/home.controller.js',
                        'ng/factory/Authentication.factory.js'
                      ]
                    });
                  }
                }
              })
            .state('dashboard.role', {
                templateUrl: 'ng/directives/role/role.directive.html',
                url: '/role',
                controller:"roleCtrl",
                resolve: {
                    loadMyDirectives: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'LIBAPP',
                            files: [
                                'ng/directives/role/role.directive.js',
                                'ng/directives/role/role.controller.js'
                            ]
                        });
                    }
                }
            }).state('dashboard.user', {
                templateUrl: 'ng/directives/user/user.directive.html',
                url: '/user',
                controller:"userCtrl",
                resolve: {
                    loadMyDirectives: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'LIBAPP',
                            files: [
                                'ng/directives/user/user.directive.js',
                                'ng/directives/user/user.controller.js'
                            ]
                        });
                    }
                }
            });



    }
]).run(function($rootScope) {
    $rootScope.getGlobalToken = function() {
        return $window.sessionStorage['token'];
    };
});