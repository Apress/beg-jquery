(function($) {

  $.fn.accordion = function(opts) {
    var defaults = {
      headings: "h2",
      content: "p",
      callback: function() {},
      duration: 600
    };

    var options = $.extend({}, defaults, opts);

    return this.each(function() {
      var $this = $(this);
      var headings = $this.children(options.headings);
      var paragraphs = $this.children(options.content);

      var animateAccordion = function(elem, duration, callback) {
        paragraphs.stop(true, true).slideUp(duration);
        $(elem).stop(true, true).slideDown(duration, callback);
      };

      paragraphs.not(":first").hide();
      $this.on("click", options.headings, function() {
        var t = $(this);
        var tPara = t.next();
        if(!tPara.is(":visible")) {
          tPara.trigger("showParagraph");
        }
      });

      $this.on("showParagraph", options.content, function() {
        animateAccordion(this, options.duration, options.callback);
      });
    });
  };

})(jQuery);
