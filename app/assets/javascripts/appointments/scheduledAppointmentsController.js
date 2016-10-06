angular.module('housekeeping')
.controller('scheduledAppointmentsController', ['$scope', 'scheduledAppointmentsService',
	function scheduledAppointmentsController($scope, scheduledAppointmentsService) {
		initModule();		
		function initModule(){
			$scope.myAppointments = [];
			scheduledAppointmentsService.getMyAppointments(3).then(function(response){
				$scope.myAppointments = response.data;
			});
		}
	}
]);