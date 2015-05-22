app.controller('getDataAboutMeController', function getDataAboutMeController($scope, $http,$route,$base64,infoUserData,authentication) {
    $http.defaults.headers.common['Authorization'] = authentication.getHeaders().Authorization;
    $scope.data = infoUserData.getAll();
    $scope.editProfile=function(newData) {
        infoUserData.edit(infoUserData.id,{name:newData.name,email:newData.email,profileImageData:newData.profileImageData,coverImageData:newData.coverImageData})
            .$promise
            .then(function(data){
                $route.reload();
                Noty.success("Successfuly edit your profil")
            },function(error){
                $route.reload();
                Noty.error("Error please try again")
            })
    }
});
