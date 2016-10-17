(function($) {
  $.fn.logAttr = function(opts) {
    var defaults = {
      attr: "id",
      backup: "N/A",
      useAlert: false
    };
    var options = $.extend({}, defaults, opts);
    return this.each(function() {
      var val = $(this).attr(options.attr) || options.backup;
      options.useAlert ? alert(val) : console.log(val);
    });
  };
})(jQuery);

