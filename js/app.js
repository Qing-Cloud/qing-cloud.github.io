angular.module('Dashboard', ['ngRoute', 'ngResource', 'overview', 'document', 'blog', 'community'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/overview', {
            controller: 'overview',
            templateUrl: 'page/overview.html',
            css: 'css/overview.css'
        }).when('/document', {
            controller: 'document',
            templateUrl: 'page/document.html',
            css: 'css/document.css'
        }).when('/blog', {
            controller: 'blog',
            templateUrl: 'page/blog.html',
            css: 'css/blog.css'
        }).when('/community', {
            controller: 'community',
            templateUrl: 'page/community.html',
            css: 'css/community.css'
        }).otherwise({redirectTo: '/overview'})
}]);

