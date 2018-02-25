var api = {
    protocol: 'http',
    server: 'localhost',
    port: 4000,
    baseUrl: '/api/v1',
    loginUrl: '/login',
    registerUrl: '/register',
};


var apiUrl = api.protocol + '://' + api.server + ':' + api.port + api.baseUrl;
var apiLoginUrl = api.protocol + '://' + api.server + ':' + api.port + api.loginUrl;
var apiRegisterUrl = api.protocol + '://' + api.server + ':' + api.port + api.registerUrl;
var angular_injector = angular.injector(['ng']);
var https = angular_injector.get('$http');


var app = angular.module('LIBAPP', ['ngCookies', 'ngMessages', 'oc.lazyLoad',
    'ui.router'
]);


app.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$httpProvider',
    function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $httpProvider) {

        $ocLazyLoadProvider.config({
            debug: false,
            events: true,
        });

        $httpProvider.defaults.withCredentials = true;

        $urlRouterProvider.otherwise('/login');
        $stateProvider
            .state('dashboard', {
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
                                'ng/directives/header/header.directive.js'
                            ]
                        });
                    }
                }
            })

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
                                'ng/directives/login/login.controller.js'
                            ]
                        });
                    }
                }
            });

    }
]);