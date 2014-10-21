(function() {
	var instance = null;

	/**
	 * The only instance of the session.
	 *
	 * @param Engine engine
	 */
	function initSession(engine) {
		instance = Object.create(null);
		Object.defineProperty(instance, "engine", {
			get: function() {
				return engine;
			}
		});
		delete coconut.session.init;
		delete coconut.session;
		Object.defineProperty(coconut, "session", {
			get: function() {
				return instance;
			}
		});
	}

	/**
	 * Initializes the session and makes the engine reachable.
	 *
	 * @var coconut.engine
	 * @return Session
	 */
	coconut.session = {
		init: function(engine) {
			if (instance === null) {
				initSession(engine);
			}
			return instance;
		}
	};
}());
