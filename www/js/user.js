angular.module('bookResources')
.factory('User', ['$resource', 'Book', 'booksServerUrl', 'bookResourceHelpers', function($resource, Book, booksServerUrl, bookResourceHelpers){
	var User = $resource(booksServerUrl + "/books/users/:id", 
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
	User.getCurrentUser = function(cb){
		var userId = '56f12930c07e7eb743691da6';
		return this.get({id: userId}, cb);
	};
	User.prototype.getBookList = function(){
		return Book.getBookListForUser(this);
	};
	return User;
}])