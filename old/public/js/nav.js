var main = function() {
  $('.nav').children('li').hover(function() {
    // mouse goes IN
    $(this).find("span").stop().animate({
      width:"100%",
      opacity:"1",
    }, 400, function() {});
  }, function() {
    // mouse goes OUT
    $(this).find("span").stop().animate({
      width:"0%",
      opacity:"0",
    }, 400, function() {});
  });
};

$(document).ready(main);
