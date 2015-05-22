app.controller('getNewsFeedPagesController', function getNewsFeedPagesController($scope, $http,$route,infoUserData,getNewsFeedPagesData,authentication) {
    $http.defaults.headers.common['Authorization'] = authentication.getHeaders().Authorization;
    $scope.feedPagesData=getNewsFeedPagesData.getAll()
        .$promise
        .then(function(data){
            $scope.pagesInfo=data;
            console.log(data);
            $scope.myFriends=data;
        },function(error){
        })
});
