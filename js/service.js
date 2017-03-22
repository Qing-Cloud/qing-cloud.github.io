app
//host,panel1//
    .factory('baremetal_server_list', ['$resource', function ($resource) {
        return $resource('/1024/orchestration/baremetal_server_list', {}, {
            query: {
                method: 'GET'
            }
        })
    }])
    .factory('shutdown', ['$resource', function ($resource) {
        var shut = {};
        shut.shutdown = function (server_id) {
            var resource = $resource('/1024/orchestration/' + server_id + '/shutdown', {}, {
                shutdown: {
                    method: 'POST'
                }
            });
            return resource.shutdown();
        };
        return shut;
    }])
    .factory('start', ['$resource', function ($resource) {
        var st = {};
        st.start = function (server_id) {
            var resource = $resource('/1024/orchestration/' + server_id + '/start', {}, {
                start: {
                    method: 'POST'
                }
            });
            return resource.start();
        };
        return st;
    }])
    .factory('restart', ['$resource', function ($resource) {
        var rst = {};
        rst.restart = function (server_id) {
            var resource = $resource('/1024/orchestration/' + server_id + '/restart', {}, {
                restart: {
                    method: 'POST'
                }
            });
            return resource.restart();
        };
        return rst;
    }])
    .factory('ipmiDeploy', ['$resource', function ($resource) {
        return $resource('/1024/orchestration/:server_id/activate-ipmi', {
                server_id: "@server_id"
            },
            {
                post: {
                    method: 'POST'
                }
            })
    }])

    .factory('getStatus', ['$resource', function ($resource) {
        return $resource('/1024/orchestration/:server_id/status', {
                server_id: "@server_id"
            },
            {
                get: {
                    method: 'GET'
                }
            })
    }])

    //os//
    .factory('osrepos', ['$resource', function ($resource) {
        return $resource('/1024/orchestration/repos', {}, {
            query: {
                method: 'GET'
            }
        })
    }])
    .factory('install', ['$resource', function ($resource) {
        return $resource('/1024/orchestration/:server_id/install', {
            server_id: "@server_id"
        }, {
            post: {
                method: 'POST'
            }
        })
    }])

    //panel2//
    .factory('deployment_existedId', ['$resource', function ($resource) {
        return $resource('/1024/orchestration/openstack/list', {}, {
            query: {
                method: 'GET', isArray: true
            }
        })
    }])
    .factory('deployExistedCSV', ['$resource', function ($resource) {
        return $resource('/1024/orchestration/task/scaleup_openstack/:deployment_id/add_computes', {
            deployment_id: '@existedId._id'
        }, {
            post: {
                method: 'POST'
            }
        })
    }])
    .factory('deployCSV', ['$resource', function ($resource) {
        return $resource('/1024/orchestration/task/deploy_openstack', {}, {
            post: {
                method: 'POST'
            }
        })
    }])
    .factory('deployment_id', ['$resource', function ($resource) {
        return $resource('/1024/orchestration/task/openstack/:deployment_id/status', {
            deployment_id: '@deployment_id'
        }, {
            query: {
                method: 'GET'
            }
        })
    }])
    //.factory('deployment_status',['$resource',function($resource){
    //    return $resource('/1024/orchestration/task/openstack/:deployment_id/sub_processes/status', {
    //        deployment_id:'@deployment_id'
    //    },{
    //        query: {
    //            method:'GET'
    //        }
    //    })
    //}])

    //panel3//
    .factory('openstack_detail', ['$resource', function ($resource) {
        return $resource('/1024/orchestration/openstack/list', {}, {
            query: {
                method: 'GET', isArray: true
            }
        })
    }])
    .factory('openstack_delete', ['$resource', function ($resource) {
        return $resource('/1024//orchestration/task/openstack/:deployment_id', {
            deployment_id: '@deployment_id'
        }, {
            delete: {
                method: 'DELETE'
            }
        })
    }])

    //monitor//
    .factory('monitor', ['$resource', function ($resource) {
        return $resource('xxx', {}, {
            post: {
                method: 'POST'
            }
        })
    }])


    //storage//
    .factory('storage', ['$resource', function ($resource) {
        return $resource('/1024/orchestration/storage/vnx', {}, {
            post: {
                method: 'POST'
            }
        })
    }])

    .factory('deployment_list', ['$resource', function ($resource) {
        return $resource('/1024/orchestration/openstack/list', {}, {
            query: {
                method: 'GET', isArray: true
            }
        })
    }])

    .factory('status_list', ['$resource', function ($resource) {
        return $resource('/1024/orchestration/storage/vnx/:task_id/status', {
            task_id: '@task_id'
        }, {
            query: {
                method: 'GET'
            }
        })
    }])


    //cloud//
    .factory('openstack_list', ['$resource', function ($resource) {
        return $resource('/1024/orchestration/openstack/list', {}, {
            query: {
                method: 'GET', isArray: true
            }
        })
    }])
    .factory('openstack_project', ['$resource', function ($resource) {
        return $resource('/1024/orchestration/openstack/:deployment_id/projects', {
            deployment_id: '@clouds._id'
        }, {
            query: {
                method: 'GET', isArray: true
            }
        })
    }])
    .factory('openstack_extnetwork', ['$resource', function ($resource) {
        return $resource('/1024/orchestration/openstack/:deployment_id/admin/extnetwork', {
            deployment_id: '@clouds._id'
        }, {
            query: {
                method: 'GET', isArray: true
            }
        })
    }])
    .factory('cloud_check', ['$resource', function ($resource) {
        return $resource('/1024/orchestration/task/cloudfoundry/:deployment_id/check_deployment_id', {
            deployment_id: '@clouds._id'
        }, {
            query: {
                method: 'GET'
            }
        })
    }])
    .factory('deploy_cloudfoundry', ['$resource', function ($resource) {
        return $resource('/1024/orchestration/task/deploy_cloudfoundry', {}, {
            post: {
                method: 'POST'
            }
        })
    }])
    .factory('cloudfoundry_status', ['$resource', function ($resource) {
        return $resource('/1024/orchestration/task/deploy_cloudfoundry/:deployment_id/status', {
            deployment_id: '@clouds._id'
        }, {
            query: {
                method: 'GET'
            }
        })
    }]);
