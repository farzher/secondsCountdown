$(function() {
  $('.seconds-countdown').secondsCountdown({
    onFinish: function() {
      var $this = $(this);

      //explode timer
      var $explode = $this.closest('.explode');
      if($explode.length) {
        $explode.animate({fontSize:'200px'}, 1000, function() {
          $explode.slideUp('fast');
        });
        return;
      }

      //redirect timer
      var $a = $this.siblings('a');
      if($a.length) {
        window.location = $a.attr('href');
        return;
      }
    }
  });
});