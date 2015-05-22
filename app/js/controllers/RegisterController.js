app.controller('RegisterController',['$scope','$route','userData','authentication',function($scope,$route,userData,authentication){

    $scope.register=function(user){
        userData.register(user)
            .$promise
            .then(function(data){
                $route.reload();
                Noty.success("Successfuly register")
            },function(error){
                $route.reload();
                Noty.error("Error please try again")
            })

    }
    $scope.isLoggedIn=authentication.isLoggedIn();
}])
