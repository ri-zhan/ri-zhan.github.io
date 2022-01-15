$(".landingPage-nav-link").hover(function(){
  var linkLabel = $(this).attr('data-label');
  $('.landingPage-nav-text').html(linkLabel);
});