angular.module('starter')
.controller('ReaderController', ['$scope', '$http', '$log', 'Book', function($scope, $http, $log, Book){
	
	$scope.fontSize = "15";
	
	// var promise = Book.get({id:'56ec1db4d10cf1e434e304d2'}, function(data){
	// 	var text = data.content || "";
	// 	$scope.content = $scope.processContent(text);
	// });
	


	$scope.processContent = function(jsonContent){
		if(typeof jsonContent === "string"){
			return jsonContent.replace(/\n/g, '<br />');	
		}else{
			return ''; 
		}
		
	};
}]);