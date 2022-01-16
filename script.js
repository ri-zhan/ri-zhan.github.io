$(function() {
  console.log( "ready!" );
});

$(".landingPage-nav-link").hover(function(){
  let linkLabel = $(this).attr('data-label');
  $('.landingPage-nav-text').html(linkLabel);
});

$(".landingPage-nav-link").click(function(){
  console.log('link click function works');
})

$(".logo").hover(function(){
  $(document).mousemove(function(e){
  $(".cursor").css({left:e.pageX, top:e.pageY});
  console.log('cursor function working')
})
});

// $(document).mousemove(function(e){
//  $(".cursor").css({left:e.pageX, top:e.pageY});
//})