$(function() {
  $('.seconds-countdown').secondsCountdown({
    onFinish: function() {
      var $this = $(this);

      //implode timer
      var $implode = $this.closest('.implode');
      if($implode.length) {
        $implode.animate({fontSize:'0px'}, 5000, function() {
          $implode.remove();
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