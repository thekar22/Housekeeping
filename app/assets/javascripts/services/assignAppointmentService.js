angular.module('housekeeping')
.service('assignAppointmentService', ['$http', function ($http) {
  var service = {  
    schedule: function (appointmentId) {
      return $http({
        method: 'POST',
        url: '/appointments/assign',
        data: {appointmentId: appointmentId}
      });
    }
  };
  return service;
}]);