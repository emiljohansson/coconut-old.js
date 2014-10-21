describe('Session', function() {
	it('should be property of coconut', function() {
		assert.typeOf(coconut, 'object');
	});
	it('should containt init and get methods', function() {
		assert.typeOf(coconut.session.init, 'function');
		assert.typeOf(coconut.session.get, 'undefined');
	});
	it('should return un initialized object', function() {
		assert.typeOf(coconut.session.engine, 'undefined');
	});
});
