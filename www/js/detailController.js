angular.module('starter')
.controller('DetailController', ['$scope', 'Book', '$stateParams', '$ionicScrollDelegate', function($scope, Book, $stateParams, $ionicScrollDelegate){
		Book.get({id: $stateParams.bookid}, function(data){
			$scope.book = data;
			//$ionicScrollDelegate.$getByHandle('mainScroll').resize();
		});

	}
]);