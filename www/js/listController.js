angular.module('starter')
.controller('ListController', ['$scope', '$http', '$log', 'Book', function($scope, $http, $log, Book){
	$scope.books = [];
	
	Book.query().$promise
	.then(function(data){
		$log.log('Loading', data);
		$scope.books = data;
	},
	function(err){
		$log.log(err);
	});
	$scope.deleteBook = function(book){
		book.$delete(function(){
			$log.log('book deleted');
			$scope.books = Book.query();
		});
	};
	$scope.subscribe = function(book, user){
		if(book && user){
			book.subscribers = book.subscribers || [];
			book.subscribers.push(user._id);
			
			book.$update(function(data){
				$log.log('update cb', arguments);
				$log.log('book', book);
				//book = data;
			});
		}else{
			$log.log('Invalid params');
		}
	};
}]);