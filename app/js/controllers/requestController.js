app.controller('requestController', function requestController($scope, $http,$route,requestData,authentication) {
    $http.defaults.headers.common['Authorization'] = authentication.getHeaders().Authorization;
    $scope.requestData = requestData.getAll()
        .$promise
        .then(function(data){
            $scope.requests=data;
            Noty.success("Success")
        },function(error){
            Noty.error("Error please try again")
        })

});
