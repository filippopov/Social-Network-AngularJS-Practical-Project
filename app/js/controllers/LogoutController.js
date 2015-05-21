app.controller('LogoutController',['$scope','$route','userData','authentication',function($scope,$route,userData,authentication){
    $scope.logout=function(){
        userData.logout()
            $route.reload();
    }
    $scope.isLoggedIn=authentication.isLoggedIn();

}])
