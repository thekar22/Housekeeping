angular.module('housekeeping')
.controller('openAppointmentsController', ['$scope', 
	function openAppointmentsController($scope) {
		initModule();		
		function initModule(){
			console.log("open appointments controller");
		}
	}
]);