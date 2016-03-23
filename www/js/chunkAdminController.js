angular.module('starter')
.controller('ChunkAdminController', ['$scope', '$http', '$log', 'Book', 'Chunk', function($scope, $http, $log, Book, Chunk){
	
	$scope.book = new Chunk();
	$scope.books = Book.query();
	$scope.postForm = function(){
		$scope.book.$save(function(data){
			$log.log(data);
		});
	}
}]);