describe('ReaderController', function(){
	var $controller, $rootScope;

	beforeEach(function(){
		module('starter');
		inject(function(_$controller_, _$rootScope_){
			$controller = _$controller_;
			$rootScope = _$rootScope_;
		});
	});

	it('should handle null', function(){
		var scope = $rootScope.$new();
		var ctrl = $controller('ReaderController', {$scope: scope});
		expect(scope.processContent(null)).toEqual('');		
	});

	it('should not replace anything', function(){
		var scope = $rootScope.$new();
		var ctrl = $controller('ReaderController', {$scope: scope});
		expect(scope.processContent('asdfasdf')).toEqual('asdfasdf');		
	});

	it('should not replace new line characters', function(){
		var scope = $rootScope.$new();
		var ctrl = $controller('ReaderController', {$scope: scope});
		expect(scope.processContent('asdfa\nsdf')).toEqual('asdfa<br />sdf');		
	});

});