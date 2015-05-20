app.controller('LoginController',['$scope','$route','userData','authentication',function($scope,$route,userData,authentication){
    $scope.login=function(user){
        userData.login(user)
            .$promise
            .then(function(data){
//                $location.path('/')
                $route.reload();
            })
    }
    $scope.isLoggedIn=authentication.isLoggedIn();

}])
