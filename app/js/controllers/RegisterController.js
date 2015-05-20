app.controller('RegisterController',['$scope','userData',function($scope,userData){
//    getDataAboutMe.getDataAboutMe()
//        .$promise
//        .then(function(data){
//            $scope.dataAboutMe=data;
//            console.log(data);
//        })

    $scope.register=function(user){
        userData.register(user)
    }
}])
