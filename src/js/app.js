var app = angular.module('dashboardApp', ['ngRoute']);
app.controller('headerCtrl', function($scope){
	$scope.title  = 'Admin Dashboard',
	$scope.menu = [
		{label : "Menu1", link : "#"},
		{label : "Menu2", link : "#"},
		{label : "Menu3", link : "#"}
	]
})
.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl : "index.html"
	})
	.when('/tables', {
		templateUrl : "tables.html"
	})
});