var app=angular.module('adsApp', ['ngRoute','ngResource']);

app.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net/api/')

app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/',{
        templateUrl:'../partials/home.html',
        controller:'HomeController'
    });

    $routeProvider.otherwise({
        redirectTo:'/'
    });

}])