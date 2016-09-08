var main = function() {
  console.log('news script loaded');
  $('.article-title').click(function() {
    //Click on a article title reveals description or hides it if its already open
    if ($(this).next('.article-description').css('display') == 'none') {
      //description is not already open

      //remove .hover early
      $(this).removeClass('hover');

      //make it the only active article
      $('.article-title').removeClass('active-article');
      $(this).addClass('active-article');

      //make it the only visible description
      $('.article-description').hide();
      $(this).next('.article-description').show();
    }
    else {
      $('.article-title').removeClass('active-article');
      $('.article-description').hide();
    };
  });
  $('.article-title').hover(function() {
    //mouse goes IN
    if ($(this).hasClass('active-article') == false) {
      $(this).addClass('hover');
      console.log('hover event');
    }
  }, function() {
    //mouse goes OUT
    $(this).removeClass('hover');
  });
};

$(document).ready(main);
