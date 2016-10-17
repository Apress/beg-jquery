(function($) {

  $.fn.slider = function(options) {
    var defaults = {
      duration: 1000,
      animationDelay: 5000
    };
    var settings = $.extend({}, defaults, options);

    return this.each(function() {
      // store some initial variables
      var $slider = $(this);
      var $sliderList = $slider.children("ul");
      var $sliderItems = $sliderList.children("li");
      var $allButtons = $slider.find(".button");
      var $buttons = {
        forward: $allButtons.filter(".forward"),
        back: $allButtons.filter(".back")
      };
      var $index = $(".index");
      var imageWidth = $sliderItems.first().children("img").width();
      var endMargin = -(($sliderItems.length - 1) * imageWidth);

      var totalImages = $sliderItems.length;
      var currentIndex = 1;
      var isPaused = false;


      var animateSlider = function(direction, callback) {
        $sliderList.stop(true, true).animate({
          "margin-left" : direction + "=" + imageWidth
        }, settings.duration, function() {
          var increment = (direction === "+" ? -1 : 1);
          updateIndex(currentIndex + increment);
          if(callback && typeof callback == "function") {
            callback();
          }
        });
      };

      var animateSliderToMargin = function(margin, callback) {
        $sliderList.stop(true, true).animate({
          "margin-left": margin
        }, settings.duration, callback);
      };

      var getLeftMargin = function() {
        return parseInt($sliderList.css("margin-left"), 10);
      };

      var isAtBeginning = function() {
        return getLeftMargin() >= 0;
      };

      var isAtEnd = function() {
        return getLeftMargin() <= endMargin;
      };

      var updateIndex = function(newIndex) {
        currentIndex = newIndex;
        $index.text(currentIndex);
      };

      var triggerSlider = function(direction, callback) {
        var isBackButton = (direction === "+");
        if(!isBackButton && isAtEnd()) {
          animateSliderToMargin(0, callback);
          updateIndex(1);
        } else if(isBackButton && isAtBeginning()) {
          animateSliderToMargin(endMargin, callback);
          updateIndex(totalImages);
        } else {
          animateSlider(direction, callback);
        }
      };


      var automaticSlide = function() {
        timer = setTimeout(function() {
          triggerSlider("-", function() {
            automaticSlide();
          });
        }, settings.animationDelay);
      };
      var timer = setTimeout(automaticSlide, settings.animationDelay);

      var resetTimer = function() {
        if(timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(automaticSlide, 30000);
      }

      $allButtons.on("click", function(event) {
        resetTimer();
        var isBackButton = $(this).hasClass("back");
        triggerSlider((isBackButton? "+" : "-"));
        event.preventDefault();
      });

      $(document.documentElement).on("keyup", function(event) {
        if(event.keyCode === 37) {
          resetTimer();
          triggerSlider("+");
        } else if (event.keyCode === 39) {
          resetTimer();
          triggerSlider("-");
        }
      });
    });
  }
})(jQuery);
