var app=angular.module('adsApp', ['ngRoute','ngResource','base64']);

app.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net/api/')

app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/',{
        templateUrl:'../partials/home.html',
        controller:'HomeController'
    });

    $routeProvider.when('/profile',{
        templateUrl:'../partials/edit-profile.html',
        controller:'getDataAboutMeController'
    });

    $routeProvider.when('/profile/password',{
        templateUrl:'../partials/change-password.html',
        controller:'changePasswordController'
    });

    $routeProvider.otherwise({
        redirectTo:'/'
    });

}])