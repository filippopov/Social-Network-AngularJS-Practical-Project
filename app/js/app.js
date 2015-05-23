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

    $routeProvider.when('/requestInfo',{
        templateUrl:'../partials/request-page.html',
        controller:'requestController'
    });


    $routeProvider.when('/friends/preview',{
        templateUrl:'../partials/all-friends.html',
        controller:'allFriendsController'
    });

    $routeProvider.when('/users/:username',{
        templateUrl:'../partials/user-wall.html',
        controller:'getUserController'
    });

    $routeProvider.otherwise({
        redirectTo:'/'
    });

}])