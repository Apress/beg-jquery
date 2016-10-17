$(function() {
  var req = $.getJSON("/sa2mple.json");
  req.done(function() { console.log("done", arguments); });
  req.fail(function() { console.log("fail", arguments); });
  req.always(function() { console.log("always", arguments); });
});

var req = $.ajax({
  "url": "/someUrl"
});

req.done(function() {
  //do something
});
req.done(function() {
  //do something else
});

req.always(function() {
  //always do this
});

