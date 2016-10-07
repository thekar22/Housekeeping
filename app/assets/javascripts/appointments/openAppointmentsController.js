angular.module('housekeeping')
.controller('openAppointmentsController', ['$scope', 'allAppointmentsService', 'parseService',
	function openAppointmentsController($scope, allAppointmentsService, parseService) {
		initModule();		
		function initModule() {
			$scope.allAppointments = [];
			allAppointmentsService.getAllAppointments(3).then(function(response){
				$scope.allAppointments = parseService.formatResponse(response.data);
			});
		}
	}
]);