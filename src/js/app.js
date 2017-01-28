var app = angular.module('dashboardApp', []);
app.controller('headerCtrl', function($scope){
	$scope.title  = 'Admin Dashboard'
});
// .config(function($routeProvider){
// 	$routeProvider
// 	.when('/', {
// 		templateUrl : "index.html"
// 	})
// 	.when('/tables', {
// 		templateUrl : "tables.html"
// 	})
// });