angular.module('housekeeping')
.controller('applicationController', ['$scope', 
	function applicationController($scope) {
		initModule();
		function initModule(){
			console.log("application controller");
		}
	}
]);