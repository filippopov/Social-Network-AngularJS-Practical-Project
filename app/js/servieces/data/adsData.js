app.factory('adsData',['$resource','baseServiceUrl' ,function($resource,baseServiceUrl){
    var resource=$resource(baseServiceUrl+'me:userId',{userId:'@id'},{
        update:{method:'PUT'}
    })

    function getPublicAds(){
        return resource.get()
    }

    function editAdd(userId, user){
        return resource.update({id:userId},user)
    }

    function getAdById(userId){
        return resource.get({id:userId})
    }

    function addAd(user){
        return resource.save(user)
    }

    function deleteAd(userId){
        return resource.delete({id:userId})
    }

    return{
        getPublicAds:getPublicAds,
        edit:editAdd,
        getAdById:getAdById,
        add:addAd,
        delete:deleteAd
    }
}])
