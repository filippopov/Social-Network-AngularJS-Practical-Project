app.factory('userData',['$resource','baseServiceUrl','authentication',function($resource,baseServiceUrl,authentication){

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
    }

    return {
        register:registerUser,
        login:loginUser,
        logout:logoutUser
    }
}])
