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
    if($this.attr('data-toggled') === undefined) {
      $this.text('start');
      $this.attr('data-toggled', true);
      $this.siblings('.seconds-countdown').secondsCountdown('stop');
    } else {
      $this.text('stop');
      $this.removeAttr('data-toggled');
      $this.siblings('.seconds-countdown').secondsCountdown('start');
    }
  });
});