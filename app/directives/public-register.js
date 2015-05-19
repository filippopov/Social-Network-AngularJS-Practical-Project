app.directive('publicRegister','',function(){
    return{
        controller:'HomeController',
        restrict:'E',
        templateUrl:'../partials/public-register.html',
        replace:true
    }
})
