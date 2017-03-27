angular.module('community', [])
    .controller("community", function ($scope) {
        $scope.toCommunity = function(n) {
            if(n === 1) {
                $scope.communityPart1 = true;
                $scope.communityPart2 = $scope.communityPart3 = $scope.communityPart4 = false;
            } else if (n ===2) {
                $scope.communityPart2 = true;
                $scope.communityPart1 = $scope.communityPart3 = $scope.communityPart4 = false;
            } else if (n ===3) {
                $scope.communityPart3 = true;
                $scope.communityPart1 = $scope.communityPart2 = $scope.communityPart4 = false;
            } else {
                $scope.communityPart4 = true;
                $scope.communityPart1 = $scope.communityPart2 = $scope.communityPart3 = false;
            }
        }
    });