angular.module('blog', [])
    .controller("blog", function ($scope) {
        $scope.titleHeight = document.documentElement.clientHeight;
    });
