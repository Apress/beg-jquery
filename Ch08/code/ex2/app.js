$(function() {
  var req = $.ajax({
    url: "http://api.dribbble.com/shots/626625",
    dataType: "jsonp"
  });
  req.done(function(data) {
    var wrapperDiv = $("<div />", {
      "class" : "wrapper"
    });

    var title = $("<h2 />", {
      text: data.title
    });

    var img = $("<img />", {
      alt: data.title,
      src: data.image_url
    });

    var user = $("<a />", {
      text: data.player.name,
      href: data.player.url
    });

    wrapperDiv
      .append(title)
      .append(img)
      .append(user);

    $("body").append(wrapperDiv);
  });

});

