angular.module('housekeeping')
.service('allAppointmentsService', ['$http', function ($http) {
  var service = {  
    getAllAppointments: function (weeksFromNow) {
      return $http({
        method: 'GET',
        url: '/appointments/all?' + $.param({weeksFromNow: weeksFromNow})
      });
    },
    runRakeTask: function (weeksFromNow) {
      return $http({
        method: 'GET',
        url: '/appointment/batch/create'
      });
    }
  };
  return service;
}]);