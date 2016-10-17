$(document).ready(function() {
  var box = $("#box");
  var para = $("p");
  var i = 0;

  para.text(i+1);
  function toggleBox(i) {
    box.fadeToggle(500, function() {
      i = i + 1;
      if(i < 10) {
        para.text(i+1);
        toggleBox(i);
      };
    });
  };

  toggleBox(i);
});
