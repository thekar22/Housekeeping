angular.module('housekeeping')
.service('finishAppointmentService', ['$http', function ($http) {
  var service = {  
    schedule: function (appointmentId) {
      return $http({
        method: 'POST',
        url: '/appointments/finish',
        data: {appointmentId: appointmentId}
      });
    }
  };
  return service;
}]);