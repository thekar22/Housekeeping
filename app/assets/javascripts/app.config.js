angular.module('housekeeping', [
  "ngRoute",
  "mobile-angular-ui",
  "mobile-angular-ui.touch",
  "mobile-angular-ui.scrollable"
]).config(function($routeProvider) {
      $routeProvider.when('/', { 
        // ...
      });
      // ...
  });