angular.module('housekeeping')
.controller('applicationController', ['$scope', 'rakeTaskService',
	function applicationController($scope, rakeTaskService) {
		$scope.onRunRakeTaskClick = function() {
			rakeTaskService.runRakeTask();
		}
	}
]);