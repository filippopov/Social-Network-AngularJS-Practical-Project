app.controller('likeAndUnlikePostsController', function likeAndUnlikePostsController($scope,$rootScope, $http,$route,$resource,baseServiceUrl,infoUserData,likeAndUnlikePostsData,authentication) {
    $http.defaults.headers.common['Authorization'] = authentication.getHeaders().Authorization;
    $scope.like=function(post){
        var resource = $resource(
                baseServiceUrl+'Posts/'+post.id+'/likes:id',
            {id: '@id'},
            { update: {
                method: 'PUT'
            }
            });
        function createNewAd(ad) {
            return resource.save(ad);
        }

        $scope.likeData=createNewAd()
            .$promise
            .then(function (data) {
                $route.reload();
            }, function (error) {
                Noty.error("Error please try again")
            })
    }

    $scope.unlike=function(post){
        $scope.unlikeData=likeAndUnlikePostsData.delete(post.id+'/likes')
            .$promise
            .then(function (data) {
                $route.reload();
            }, function (error) {
                Noty.error("Error please try again")
            })
    }

});
