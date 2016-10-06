angular.module('housekeeping')
.service('scheduledAppointmentsService', ['$http', function ($http) {
  var service = {  
    getMyAppointments: function (weeksFromNow) {
      return $http({
        method: 'GET',
        url: '/appointments/currentuser?' + $.param({weeksFromNow: weeksFromNow})
      });
    }
  };
  return service;
}]);