(function() {

	function Point(x, y) {
		var _x = x || 0;
		var _y = y || 0;

		Object.defineProperty(this, "x", {
			get : function() {
				return _x;
			},
			set : function(value) {
				_x = value;
			}
		});

		Object.defineProperty(this, "y", {
			get : function() {
				return _y;
			},
			set : function(value) {
				_y = value;
			}
		});
	}

	Point.prototype.angle = function(point) {
		var deltaX = this.x - point.x;
		var deltaY = this.y - point.y;
		return Math.atan2(deltaY, deltaX) * 180 / Math.PI;
	};

	coconut.Point = Point;
}());
