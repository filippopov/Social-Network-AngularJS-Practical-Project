app.controller('sendPostController', function sendPostController($scope, $http,$route,infoUserData,postData,authentication) {
    $http.defaults.headers.common['Authorization'] = authentication.getHeaders().Authorization;
    $scope.sendMsg=function(text,name) {
        $scope.sendPost = postData.create({postContent: text, username: name})
            .$promise
            .then(function (data) {
                $route.reload();
                Noty.success("Successfuly send massage")
            }, function (error) {
                Noty.error("Error please try again")
            })

    }
});
