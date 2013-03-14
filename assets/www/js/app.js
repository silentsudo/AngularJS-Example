angular.module('website', ['appNameService', 'appAboutService', 'appExperimentService', 'appHomeService']).config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/about', {
		templateUrl : 'partials/about.html',
		controller : aboutDetails
	}).when('/experiment', {
		templateUrl : 'partials/experiment.html',
		controller : experimentDetails
	}).when('/home', {
		templateUrl : 'partials/home.html',
		controller : homeDetails
	}).otherwise({
		redirectTo : '/home'
	});
} ]);