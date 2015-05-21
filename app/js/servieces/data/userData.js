app.factory('userData',['$resource','$route','baseServiceUrl','authentication',function($resource,$route,baseServiceUrl,authentication){

    function registerUser(user){
        var resource = $resource(baseServiceUrl+'users/register')
            .save(user)
        resource.$promise
            .then(function(data){
                authentication.saveUser(data);
            })
        return resource;


    }

    function loginUser(user){
        var resource= $resource(baseServiceUrl+'users/login')
            .save(user)
        resource.$promise
            .then(function(data){
                authentication.saveUser(data);
            });
        return resource;

    }

    function logoutUser(){
        localStorage.clear();
        $route.reload();
    }

    return {
        register:registerUser,
        login:loginUser,
        logout:logoutUser
    }
}])
