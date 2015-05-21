app.controller('getDataAboutMeController', function getDataAboutMeController($scope, $http,$route,infoUserData,authentication) {
    $http.defaults.headers.common['Authorization'] = authentication.getHeaders().Authorization;
    $scope.data = infoUserData.getAll();
    $scope.editProfile=function(newData) {
        infoUserData.edit(infoUserData.id,{name:newData.name,email:newData.email})
            .$promise
            .then(function(data){
                $route.reload();
            })
    }
});
