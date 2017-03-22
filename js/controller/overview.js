angular.module('overview', [])
    .controller("overview", function ($scope) {
        $scope.titleHeight = document.documentElement.clientHeight;
        new WOW().init();
    });
