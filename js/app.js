angular.module('Dashboard', ['ngRoute', 'ngResource', 'overview', 'host'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/overview', {
            controller: 'overview',
            templateUrl: 'page/overview.html',
            css: 'css/overview.css'
        }).when('/host', {
            controller: 'host',
            templateUrl: 'page/host.html',
            css: 'css/host.css'
        }).otherwise({redirectTo: '/overview'})
}]);

