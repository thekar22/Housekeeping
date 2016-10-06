angular.module('housekeeping')
.controller('openAppointmentsController', ['$scope', 'allAppointmentsService',
	function openAppointmentsController($scope, allAppointmentsService) {
		initModule();		
		function initModule(){
			$scope.allAppointments = [];
			allAppointmentsService.getAllAppointments(3).then(function(response){
				$scope.allAppointments = response.data;
			});

			allAppointmentsService.runRakeTask(3).then(function(response) {
				console.log("ran");
			});
		}
	}
]);