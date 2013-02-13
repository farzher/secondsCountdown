QUnit.config.reorder = false; // Run tests in order
QUnit.config.reorder = true; // ... IF YOU'RE GAY LOL

$(function() {
	asyncTest('onFinish should be called when timer hits 0', 1, function() {
		var $dom = $('<div><span class="sc"></span></div>');
		$('.sc', $dom).secondsCountdown({
			seconds: 0,
			onFinish: function() {
				ok(true, 'onFinish triggered');
				start();
			}
		});
	});

	asyncTest('onTick should be called every tick', 2, function() {
		var $dom = $('<div><span class="sc"></span></div>');
		$('.sc', $dom).secondsCountdown({
			seconds: 2,
			onTick: function() {
				ok(true, 'onTick triggered');
			},
			onFinish: function() {
				start();
			}
		});
	});

	asyncTest('seconds should be picked up from the text', 1, function() {
		var $dom = $('<div><span class="sc">1</span></div>');
		$('.sc', $dom).secondsCountdown({
			onTick: function() {
				ok(true, 'onTick triggered');
			},
			onFinish: function() {
				start();
			}
		});
	});

	asyncTest('stopping, starting, overwrite text time, changing options', 3, function() {
		var $dom = $('<div><span class="sc">2</span></div>');
		$('.sc', $dom).secondsCountdown({
			seconds: 1,
			onTick: function() {
				ok(true, 'onTick triggered');
			},
			onFinish: function() {
				$('.sc', $dom).secondsCountdown('option', 'seconds', 2);
				$('.sc', $dom).secondsCountdown('option', 'onFinish', function() {
					start();
				});
				$('.sc', $dom).secondsCountdown('start');
			}
		});
	});
});
