angular.module('housekeeping')
.service('startAppointmentService', ['$http', function ($http) {
  var service = {  
    schedule: function (appointmentId) {
      return $http({
        method: 'POST',
        url: '/appointments/start',
        data: {appointmentId: appointmentId}
      });
    }
  };
  return service;
}]);