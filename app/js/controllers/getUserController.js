app.controller('getUserController', function getUserController($scope, $http,$route,getUserData,authentication) {
    $http.defaults.headers.common['Authorization'] = authentication.getHeaders().Authorization;
    $scope.getUserName=function(myFriend) {
        $scope.informationData = getUserData.getById(myFriend.username)
            .$promise
            .then(function(data){
//                console.log(data)
//                Noty.success("Success")
                $scope.userInfoData=data.name;
                console.log($scope.userInfoData.username)
            },function(error){
                Noty.error("Error please try again")
            })
    }

});
