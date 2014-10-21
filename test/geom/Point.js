describe('Point', function() {
    describe('x and y properties', function() {
        var point = new coconut.Point();

        it('should be set', function() {
            assert.equal(point.x, 0);
            assert.equal(point.y, 0);

            point = new coconut.Point(4, 5);
            assert.equal(point.x, 4);
            assert.equal(point.y, 5);
        });

        it('should set x', function() {
            point.x = 42.2;
            assert.equal(point.x, 42.2);
        });

        it('should set y', function() {
            point.y = 43.6;
            assert.equal(point.y, 43.6);
        });
    });

    describe('angle', function() {
        var p1, p2;

        it('should calculate the angle', function() {
            p1 = new coconut.Point(6, 7);
            p2 = new coconut.Point(5, 6);
            assert.equal(p1.angle(p2), 45);

            p1 = new coconut.Point(4, 7);
            p2 = new coconut.Point(5, 6);
            assert.equal(p1.angle(p2), 135);

            p1 = new coconut.Point(7, 6);
            p2 = new coconut.Point(6, 7);
            assert.equal(p1.angle(p2), -45);

            p1 = new coconut.Point(5, 6);
            p2 = new coconut.Point(6, 7);
            assert.equal(p1.angle(p2), -135);
        });
    });
});
