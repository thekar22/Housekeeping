console.log("m");
angular.module('housekeeping')
.controller('applicationController', ['$scope', 
	function applicationController($scope) {
		initModule();
		console.log("j");
		function initModule(){
			console.log("application controller");
		}
	}
]);