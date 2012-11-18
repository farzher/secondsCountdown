#[Seconds Countdown](https://raw.github.com/farzher/secondsCountdown/master/jquery.secondsCountdown.js)

Simple, quick, clean, flexable way to add a seconds countdown.

##Installation

1. Include the [/jquery.secondsCountdown.js](https://raw.github.com/farzher/secondsCountdown/master/jquery.secondsCountdown.js) file after your copy of jQuery.

##Usage

Markup

	<p>
		You will be redirected in <span class="seconds-countdown">12</span> seconds. Or <a href="#">go there now</a>.
	</p>

Javascript

	$('.seconds-countdown').secondsCountdown({
		onFinish: function() {
			window.location = $(this).siblings('a').attr('href');
		}
	});

##Options

 - `seconds`
	This can either be set as an option, or the text of the element (as shown in the usage section).
 - `onFinish`
 	Called when seconds is less than 0. Inside of your callback function, "this" will refer to the element.
 - `onTick`
 	Called before every tick. If you return false, the seconds won't go down for that tick.

###Tips

The markup can be any element, all this plugin does to it is overwrite it's text.