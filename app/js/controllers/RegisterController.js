app.controller('RegisterController',['$scope','$route','userData','authentication',function($scope,$route,userData,authentication){

    $scope.register=function(user){
        userData.register(user)
            .$promise
            .then(function(data){
                $route.reload();
            })
    }
    $scope.isLoggedIn=authentication.isLoggedIn();
}])
