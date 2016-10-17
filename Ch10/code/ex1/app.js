$(function() {
  $.dribbble.getShot({
    id: "626625",
    callback: function(data) {
      console.log(data);
    }
  });
  $.dribbble.getPlayerShotsFollowing({
    id: "sturobson",
    page: 1,
    per_page: 15,
    callback: function(data) {
      for(var i = 0; i < data.shots.length; i++) {
        var shot = data.shots[i];
        var wrapperDiv = $("<div />", {
          "class" : "wrapper"
        });

        var title = $("<h2 />", {
          text: shot.title
        });

        var img = $("<img />", {
          alt: shot.title,
          src: shot.image_url
        });

        var user = $("<a />", {
          text: shot.player.name,
          href: shot.player.url
        });

        wrapperDiv
        .append(title)
        .append(img)
        .append(user);

        $("body").append(wrapperDiv);
      }
    }
  });
});
