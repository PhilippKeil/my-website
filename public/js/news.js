var main = function() {
  $('.article-title').click(function() {
    // click on a article title reveals description or hides it if its already open
    if ($(this).next('.article-description').css('display') == 'none') {
      // description is not already open
      // make it the only active article
      $('.article').removeClass('active-article');
      $(this).parent('.article').addClass('active-article');

      // make it the only visible description
      $('.article-description').hide('slow');
      $(this).next('.article-description').show('slow');
    }
    else {
      $('.article').removeClass('active-article');
      $('.article-description').hide('slow');
    };
  });

  $('.article-title').hover(function() {
    // mouse goes IN

    // old method. Used that the article-title wouldnt recolor on hover, because
    // it used to have an other color that the rest of the articles.
    /*
    if ($(this).hasClass('active-article') == false) {
      $(this).addClass('hover');
    }
    */
    $(this).addClass('hover');
  }, function() {
    // mouse goes OUT
    $(this).removeClass('hover');
  });

  $('.article-description').hover(function() {
    // mouse goes IN
    $(this).addClass('hover');
  }, function() {
    // mouse goes OUT
    $(this).removeClass('hover');
  });

  $('.article-description').click(function() {
    window.location.href = $(this).attr('data-news-url');
  });
};

$(document).ready(main);
