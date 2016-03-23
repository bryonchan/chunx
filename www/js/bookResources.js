angular.module('bookResources', ['ngResource'])
.factory('bookResourceHelpers', [function(){
	var helper = function(){};
	helper.mongoDbTransformRequest = function(data, headers){
		//need to strip _id from data to suit mongodb-rest PUT behaviour
		var copy = angular.copy(data);
		delete copy._id;
		return angular.toJson(copy);
	};
	return helper;
}]);