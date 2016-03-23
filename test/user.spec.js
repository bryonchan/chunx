describe('User', function(){
	var User, $httpBackend;
	var mockHostUrl = 'http://localhost:3999';

	beforeEach(function(){
		module('bookResources', function($provide){
			$provide.value('booksServerUrl', mockHostUrl);
		});
	});

	beforeEach(function(){
		inject(function($injector){
			$httpBackend = $injector.get('$httpBackend');
		});
	});

	beforeEach(function(){
		inject(function(_User_){
			User = _User_;
		});
	});

	it('should call POST when save is called on a new item', function(){
		$httpBackend.expectPOST(mockHostUrl+"/books/users").respond({});
		var user = new User();
		user.title = "Bryon";
		user.$save();
		$httpBackend.flush();
	});

	it('should call PUT when save is called on an existing item', function(){
		var title = 'Bryon';
		var id = "b1234";
		$httpBackend.expect('POST', mockHostUrl+"/books/users", {"title": title})
		.respond({"_id": id, "title": title});
		var user = new User();
		user.title = title;
		user.$save();
		$httpBackend.flush();
		
		expect(user._id).not.toBeUndefined();
		expect(user._id).not.toBeNull();
		
		$httpBackend.expect('PUT', mockHostUrl+"/books/users/b1234", {"title": title})
		.respond({"_id": id, "title": title});
		user.$update();
		$httpBackend.flush();
	});

	it('should ignore the "ok" response', function(){
		$httpBackend.expectPUT(mockHostUrl+"/books/users").respond({ok: '1'});
		var user = new User();
		user.title = "Bryon";
		user.$update();
		$httpBackend.flush();
		expect(user.ok).toBeUndefined();
		expect(user.title).toEqual("Bryon");
	});
});