describe('Core', function() {
    describe('version', function() {
        it('should be set', function() {
            assert.typeOf(window.coconut, 'object');
            assert.typeOf(window.coconut.version, 'string');
        });
    });
});
