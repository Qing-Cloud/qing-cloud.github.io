app
    .factory('xxx', ['$resource', function ($resource) {
        return $resource('/xxx', {}, {
            query: {
                method: 'GET'
            }
        })
    }]);