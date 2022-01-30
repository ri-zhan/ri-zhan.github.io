console.log( "ready!" );

$('#landingPage-nav').mousemove(function(e){
  $("#cursor-overlay").css({left: e.pageX, top:e.pageY});
});

$('#landingPage-nav').mousemove(function(e){
  $("#landingPage-diamond").css({left: e.pageX, top:e.pageY});
});

$('#landingPage-nav').mouseleave(function(){
  $(".cursor").css({left: '50%', top:'50%', transform: 'translate(-50%, -50%)'});
});

$('#projectPage-nav').mousemove(function(e){
  $("#cursor-overlay").css({left: e.pageX, top:e.pageY});
});


let slideIndex = 1;
showSlides(slideIndex)

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  if  (n > $('.slides').length) {slideIndex = 1}
  if (n < 1) {slideIndex = $('.slides').length}
  for (i = 0; i < $('.slides').length; i++){
    $('.slides')[i].style.display = "none";
  }
  $('.slides')[slideIndex-1].style.display = "block";
}