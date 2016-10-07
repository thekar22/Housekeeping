angular.module('housekeeping', [
	"templates",
	"ngRoute",
	"mobile-angular-ui",
	'ng-rails-csrf',
	'ngAnimate',
	'angular-loading-bar'
]).config(function($routeProvider) {
	$routeProvider
	.when('/', { 
		templateUrl: 'appointments/scheduledAppointments.html', 
		controller: 'scheduledAppointmentsController'
	})
	.when('/open/', { 
		templateUrl: 'appointments/openAppointments.html', 
		controller: 'openAppointmentsController'
	})
	.when('/scheduled/', { 
		templateUrl: 'appointments/scheduledAppointments.html', 
		controller: 'scheduledAppointmentsController'
	});
}).config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
 }]);