var main = function() {
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
      $('.article-description').hide('slow');
      $(this).next('.article-description').show('slow');
    }
    else {
      $('.article-title').removeClass('active-article');
      $('.article-description').hide('slow');
    };
  });

  $('.article-title').hover(function() {
    //mouse goes IN
    if ($(this).hasClass('active-article') == false) {
      $(this).addClass('hover');
    }
  }, function() {
    //mouse goes OUT
    $(this).removeClass('hover');
  });

  $('.article-description').hover(function() {
    //mouse goes IN
    $(this).addClass('hover');
  }, function() {
    //mouse goes OUT
    $(this).removeClass('hover');
  });

  $('.article-description').click(function() {
    window.location.href = $(this).attr('data-news-url');
  });
};

$(document).ready(main);
