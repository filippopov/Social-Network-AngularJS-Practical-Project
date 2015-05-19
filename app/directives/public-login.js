app.directive('publicLogin','',function(){
    return{
        controller:'HomeController',
        restrict:'E',
        templateUrl:'../partials/public-login.html',
        replace:true
    }
})
