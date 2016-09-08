var main = function() {
  console.log('news script loaded');
  $('.article-title').click(function() {
    //Click on a article title reveals description or hides it if its already open
    if ($(this).next('.article-description').css('display') == 'none') {
      //description is not already open
      $('.article-title').removeClass('active-article');
      $(this).addClass('active-article');

      $('.article-description').hide();
      $(this).next('.article-description').show();
    }
    else {
      $('.article-title').removeClass('active-article');
      $('.article-description').hide();
    };
  });
};

$(document).ready(main);
