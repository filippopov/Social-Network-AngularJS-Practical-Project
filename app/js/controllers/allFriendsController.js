app.controller('allFriendsController', function allFriendsController($scope, $http,$route,infoUserData,allFriends,authentication) {
    $http.defaults.headers.common['Authorization'] = authentication.getHeaders().Authorization;
    $scope.dataFriends=allFriends.getAll()
        .$promise
        .then(function(data){
            $scope.myFriends=data;
        },function(error){
        })
});


