(function($) {
  $.fn.logId = function() {
    return this.each(function() {
      console.log(this.id);
    });
  };
})(jQuery);

