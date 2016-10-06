angular.module('housekeeping')
.controller('scheduledAppointmentsController', ['$scope', 'scheduledAppointmentsService',
	function scheduledAppointmentsController($scope, scheduledAppointmentsService) {
		initModule();		
		function initModule(){
			console.log("scheduled appointments controller");
			scheduledAppointmentsService.getMyAppointments(3);
		}
	}
]);