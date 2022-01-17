$(function() {
  console.log( "ready!" );

$('landingPage-nav').hover(function(e){
  $(this).mousemove(function(e){
  $(".cursor").css({left:e.pageX, top:e.pageY});
  console.log('cursor function working')
})
});
});

// this following code alone works so it's just the 'landingPage-nav' part that seems to be malfunctioning?
// $(document).mousemove(function(e){
//  $(".cursor").css({left:e.pageX, top:e.pageY});
// })