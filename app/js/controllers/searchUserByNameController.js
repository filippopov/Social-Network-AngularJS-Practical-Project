app.controller('searchUserByNameController', function searchUserByNameController($scope,$rootScope, $http,$route,infoUserData,searchUserByName,authentication) {
    $http.defaults.headers.common['Authorization'] = authentication.getHeaders().Authorization;
    $scope.search=function(text){
        $scope.searchData=searchUserByName.getById(text)
            .$promise
            .then(function(data){
                $rootScope.allDataFromSearch=data;
                console.log($scope.allDataFromSearch)
                Noty.success("Success")
            },function(error){
                Noty.success("Error")
            })


    }

});
