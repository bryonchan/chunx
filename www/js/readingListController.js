angular.module('starter')
.controller('ReadingListController', ['$scope', '$http', '$log', 'User', function($scope, $http, $log, User){
	$scope.currentUser = {};
	
	User.getCurrentUser().$promise
	.then(function(user){
		$log.log('User loaded', user);
		$scope.currentUser = user;
		$scope.currentUser.getBookList().$promise
		.then(function(data){
			$scope.bookList = data;	
		});
		
	},
	function(err){
		$log.log(err);
	});
	$scope.deleteUser = function(book){
		book.$delete(function(){
			$log.log('book deleted');
			$scope.currentUser = User.query();
		});
	};
}]);