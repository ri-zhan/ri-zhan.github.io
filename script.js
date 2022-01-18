console.log( "ready!" );

$('#landingPage-nav').mousemove(function(e){
  $(".cursor").css({left: e.pageX, top:e.pageY});
});

$('#landingPage-nav').mouseleave(function(){
  $(".cursor").css({left: '50%', top:'50%', transform: 'translate(-50%, -50%)'});
});

// this following code alone works so it's just the 'landingPage-nav' part that seems to be malfunctioning?
// $(document).mousemove(function(e){
//  $(".cursor").css({left:e.pageX, top:e.pageY});
// })