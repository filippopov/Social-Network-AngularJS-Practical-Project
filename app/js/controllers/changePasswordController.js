app.controller('changePasswordController', function changePasswordController($scope, $http,$route,infoUserData,changePasswordData,authentication) {
    $http.defaults.headers.common['Authorization'] = authentication.getHeaders().Authorization;
    $scope.changePassword=function(newPassword) {
        $scope.dataPassword = changePasswordData.getAll;
        changePasswordData.edit(infoUserData.id,{newPassword:newPassword.newPassword,confirmPassword:newPassword.confirmPassword,oldPassword:newPassword.oldPassword})
            .$promise
            .then(function(data){
                $route.reload();
                Noty.success("Successfuly change your password")
            },function(error){
                $route.reload();
                Noty.error("Error please try again")
            })
    }
});
