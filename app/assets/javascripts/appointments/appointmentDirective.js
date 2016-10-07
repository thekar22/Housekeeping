angular
  .module('housekeeping')
  .directive('appointment', ['assignAppointmentService', 'startAppointmentService', 'finishAppointmentService', 
    function (assignAppointmentService, startAppointmentService, finishAppointmentService) {
    
    function linkFunction($scope, elem, attrs) {
      elem.on('click', '.scheduleButton', function () {        
        assignAppointmentService.schedule($scope.appointment.id).then(function(response){
          elem.hide(300, function(){
            $scope.$destroy();
          });          
        });
      });

      elem.on('click', '.startButton', function () {        
        startAppointmentService.schedule($scope.appointment.id).then(function(response){
          $scope.appointment.start_at = response.data.start_at;
        });
      });

      elem.on('click', '.finishButton', function () {                
        finishAppointmentService.schedule($scope.appointment.id).then(function(response){
          $scope.appointment.end_at = response.data.end_at;
          elem.hide(300, function(){
            $scope.$destroy();
          });
        });
      });
    }

    return {
      restrict: 'E',
      scope: {
        appointment: '='
      },
      replace: true,
      templateUrl: "appointments/appointmentDirectiveView.html",
      link: linkFunction
    };
}]);