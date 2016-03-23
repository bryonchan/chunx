angular.module('starter')
.controller('ChunkListController', ['$scope', '$http', '$log', 'Chunk', function($scope, $http, $log, Chunk){
	$scope.chunks = [];
	
	Chunk.query().$promise
	.then(function(data){
		$log.log('Loading', data);
		$scope.chunks = data;
	},
	function(err){
		$log.log(err);
	});
	$scope.deleteChunk = function(book){
		book.$delete(function(){
			$log.log('book deleted');
			$scope.chunks = Chunk.query();
		});
	};
}]);