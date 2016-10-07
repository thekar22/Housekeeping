angular.module('housekeeping')
.controller('scheduledAppointmentsController', ['$scope', 'scheduledAppointmentsService', 'parseService',
	function scheduledAppointmentsController($scope, scheduledAppointmentsService, parseService) {
		initModule();		
		function initModule(){
			$scope.myAppointments = [];
			scheduledAppointmentsService.getMyAppointments(3).then(function(response){
				$scope.myAppointments = parseService.formatResponse(response.data);		
			});
		}
	}
]);