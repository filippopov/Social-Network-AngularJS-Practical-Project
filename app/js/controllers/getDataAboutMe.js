app.controller('getDataAboutMe',['$scope','adsData',function($scope,adsData){
    adsData.getPublicAds()
        .$promise
        .then(function(data){
            $scope.ads=data;
        })
}])
