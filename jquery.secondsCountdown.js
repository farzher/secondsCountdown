(function($) {
	//Undefined values are required options
	var defaultOptions = {
		seconds: undefined,
		onFinish: $.noop,
		onTick: $.noop
	};

	function getOptions($this) {
		return $this.data('secondsCountdown');
	}

	/**
	 * Init element
	 */
	function initElement($this, options) {
		var element = $this[0];
		$this.data('secondsCountdown', options);
		//Try to parse the element's text to it's seconds, this overrides options.seconds
		var text = parseInt($this.text(), 10);
		if(!isNaN(text)) {
			options.seconds = text;
		}

		render($this);

		//update
		var setIntervalId = setInterval(function() {
			//If onTick returns false, don't count down!
			if(options.onTick.apply(element) !== false) {
				options.seconds -= 1;
			}

			if(options.seconds < 0) {
				clearInterval(setIntervalId);
				options.onFinish.apply(element);
			} else {
				render($this);
			}
		}, 1000);
	}

	/**
	 * Render element
	 */
	function render($this) {
		var options = getOptions($this);
		$this.text(options.seconds);
	}

	/**
	 * Setting or getting an option
	 */
	function handleOption($this, key, value) {
		if(value !== undefined) {
			//Setting options
			return $this.each(function() {
				var $this = $(this);
				getOptions($this)[key] = value;
				render($this);
			});
		} else {
			//Getting an option
			return getOptions($this)[key];
		}
	}

	$.fn.secondsCountdown = function(command, key, value) {
		if($.type(command) === 'string') {
			switch (command) {
				case 'option': return handleOption(this, key, value);
			}
		}
		
		return this.each(function() {
			var options = $.extend({}, defaultOptions, command);
			initElement($(this), options);
		});
	};
})(jQuery);