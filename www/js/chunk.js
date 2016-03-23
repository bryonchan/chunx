angular.module('bookResources')
.factory('Chunk', ['$resource', 'booksServerUrl', function($resource, booksServerUrl){
	return $resource(booksServerUrl + "/books/chunks/:id", {id: '@_id'});
}]);