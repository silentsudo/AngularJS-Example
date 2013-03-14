angular.module('website', []).config(function($routeProvider) {
	$routeProvider.when('/about', {
		templateUrl : 'partials/about.html',
		controller : AC
	}).when('/experiment', {
		templateUrl : 'partials/experiment.html',
		controller : EC
	}).when('/home', {
		templateUrl : 'partials/home.html',
		controller : HC
	}).otherwise({
		redirectTo : '/home'
	});
});
function MainCtrl($scope, $location) {
	$scope.setRoute = function(route) {
		$location.path(route);
	}
}
function AC($scope) {
	$scope.content = "About Us Page";
}

function EC($scope) {
	$scope.content = "Experiment Page";
}

function HC($scope) {
	$scope.content = "Home Page";
}