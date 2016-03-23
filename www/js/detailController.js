angular.module('starter')
.controller('DetailController', ['$scope', 'Chunk', '$stateParams', '$location', function($scope, Chunk, $stateParams, $location){
		
		Chunk.getChunks($stateParams.bookid).$promise
		.then(function(data){
			$scope.chunks = data;
		});

	}
]);