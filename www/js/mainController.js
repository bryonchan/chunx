angular.module('starter')
.controller('MainController', ['$scope', 'User', function($scope, User){
	
	User.getCurrentUser(function(user){
		$scope.currentUser = user;
	});

}])