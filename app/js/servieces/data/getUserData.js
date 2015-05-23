app.factory('getUserData', function getUserData($resource,baseServiceUrl) {
    var resource = $resource(
            baseServiceUrl+'users/:id',
        {id: '@id'},
        { update: {
            method: 'PUT'
        }
        });

    function getAllAds() {
        return resource.get();
    }

    function createNewAd(ad) {
        return resource.save(ad);
    }

    function getAdById(id) {
        return resource.get({id: id});
    }

    function getAdByIdWithQuery(id) {
        return resource.query({id: id});
    }

    function editAd(id, ad) {
        return resource.update({id: id}, ad);
    }

    function deleteAd(id) {
        return resource.delete({id: id});
    }

    return {
        getAll: getAllAds,
        create: createNewAd,
        getById: getAdById,
        getAdByIdWithQuery:getAdByIdWithQuery,
        edit: editAd,
        delete: deleteAd
    }
});

