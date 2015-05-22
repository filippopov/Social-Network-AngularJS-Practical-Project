app.controller('LoginController',['$scope','$route','userData','authentication',function($scope,$route,userData,authentication){
    $scope.login=function(user){
        userData.login(user)
            .$promise
            .then(function(data){
//                $location.path('/')
                $route.reload();
                Noty.success("Successfuly login")
            },function(error){
                $route.reload();
                Noty.error("Error please try again")
            })

    }
    $scope.isLoggedIn=authentication.isLoggedIn();
    console.log(authentication.getHeaders())

}])
