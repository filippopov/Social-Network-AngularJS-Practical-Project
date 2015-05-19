var app=angular.module('adsApp', ['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/',{
        templateUrl:'../partials/home.html',
        controller:'HomeController'
    });
    $routeProvider.otherwise({
        redirectTo:'/'
    });
}])