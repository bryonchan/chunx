angular.module('bookResources')
.factory('Book', ['$resource', 'booksServerUrl', 'bookResourceHelpers', function($resource, booksServerUrl, bookResourceHelpers){
	var Book = $resource(
		booksServerUrl + "/books/books/:id", 
		{id: '@_id'},
		{
			update: {
				method: 'put',
				transformRequest: bookResourceHelpers.mongoDbTransformRequest,
				transformResponse: function(){
					return null;
				}
			}
		}
	);
	Book.getBookListForUser = function(user){
		return Book.query({query: {"subscribers":user._id}});
	};
	return Book;
}]);