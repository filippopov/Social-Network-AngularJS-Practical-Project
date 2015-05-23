app.controller('userController',['$scope','$rootScope','$http','$route','infoUserData','getUserData','authentication', function($scope,$rootScope, $http,$route,infoUserData,getUserData,authentication) {
    $http.defaults.headers.common['Authorization'] = authentication.getHeaders().Authorization;


    $scope.getUserName =function (myFriend) {

    $scope.informationData = getUserData.getById(myFriend.username)
        .$promise
        .then(function (data) {
            $rootScope.userInfoData = data;
            console.log($rootScope.userInfoData)
        }, function (error) {
            Noty.error("Error please try again")
        })


    $scope.userWallData = getUserData.getAdByIdWithQuery(myFriend.username + '/wall?StartPostId&PageSize=5')
        .$promise
        .then(function (data) {
            $rootScope.wallData = data;
            var like = data[1].liked;

            function isLike(like) {
                if (like) {
                    return true;
                }
                return false;
            }

            $scope.isLike = isLike(like);
            console.log($scope.wallData)
        }, function (error) {
            Noty.error("Error please try again")
        })


        $scope.userFriendsData = getUserData.getAdByIdWithQuery(myFriend.username + '/friends')
            .$promise
            .then(function (data) {
                $rootScope.userFriends = data;
            }, function (error) {
                Noty.error("Error please try again")
            })

    }



}]);
