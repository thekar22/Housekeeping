angular.module('housekeeping')
.service('rakeTaskService', ['$http', function ($http) {
  var service = {  
    runRakeTask: function () {
      return $http({
        method: 'GET',
        url: '/appointment/batch/create'
      });
    }
  };
  return service;
}]);