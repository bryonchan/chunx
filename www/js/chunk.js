angular.module('bookResources')
.factory('Chunk', ['$resource', 'booksServerUrl', function($resource, booksServerUrl){
	var Chunk = $resource(booksServerUrl + "/books/chunks/:id", {id: '@_id'});
	Chunk.getChunks = function(bookId){
		return Chunk.query({query: {"bookId": bookId}});
	};
	return Chunk;
}]);