app.controller('getNewsFeedPagesController', function getNewsFeedPagesController($scope, $http,$route,infoUserData,getNewsFeedPagesData,authentication) {
    $http.defaults.headers.common['Authorization'] = authentication.getHeaders().Authorization;
    $scope.feedPagesData=getNewsFeedPagesData.getAll()
        .$promise
        .then(function(data){
            $scope.pagesInfo=data;
            var like=data[1].liked;
            function isLike(like){
                if(like){
                    return true;
                }
                return false;
            }
            $scope.isLike=isLike(like)
            console.log($scope.isLike);
            console.log(data);
            $scope.myFriends=data;
        },function(error){
        })
});
