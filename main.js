$(function() {
  $('.seconds-countdown').secondsCountdown({
    onFinish: function() {
      var $this = $(this);

      //implode timer
      var $implode = $this.closest('.implode');
      if($implode.length) {
        $implode.animate({fontSize:'0px'}, 2000, function() {
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

  $('.stop').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    $this.siblings('.seconds-countdown').secondsCountdown('stop');
  });
});