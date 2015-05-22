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
    $scope.requestAccept=function(request){
        requestData.edit(request.id+'?status=approved')
            .$promise
            .then(function(data){
                $route.reload();
                Noty.success("Success")
            },function(error){
                Noty.error("Error please try again")
            })

    }

    $scope.requestReject=function(request){
        requestData.edit(request.id+'?status=rejected')
            .$promise
            .then(function(data){
                $route.reload();
                Noty.success("Success")
            },function(error){
                Noty.error("Error please try again")
            })

    }
});
