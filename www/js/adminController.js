angular.module('starter')
.controller('AdminController', ['$scope', '$http', '$log', 'Book', function($scope, $http, $log, Book){
	
	$scope.book = new Book();
	$scope.books = Book.query();
	$scope.postForm = function(){
		$scope.book.$save(function(data){
			$log.log(data);
			alert('Book created');
		});
	};
}]);