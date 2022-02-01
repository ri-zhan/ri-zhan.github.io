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


var doc = window.document,
  context = doc.querySelector('.js-loop'),
  clones = context.querySelectorAll('.is-clone'),
  disableScroll = false,
  scrollHeight = 0,
  scrollPos = 0,
  clonesHeight = 0,
  i = 0;

function getScrollPos () {
  return (context.pageYOffset || context.scrollTop) - (context.clientTop || 0);
}

function setScrollPos (pos) {
  context.scrollTop = pos;
}

function getClonesHeight () {
  clonesHeight = 0;

  for (i = 0; i < clones.length; i += 1) {
    clonesHeight = clonesHeight + clones[i].offsetHeight;
  }

  return clonesHeight;
}

function reCalc () {
  scrollPos = getScrollPos();
  scrollHeight = context.scrollHeight;
  clonesHeight = getClonesHeight();

  if (scrollPos <= 0) {
    setScrollPos(1); // Scroll 1 pixel to allow upwards scrolling
  }
}

function scrollUpdate () {
  if (!disableScroll) {
    scrollPos = getScrollPos();

    if (clonesHeight + scrollPos >= scrollHeight) {
      // Scroll to the top when you’ve reached the bottom
      setScrollPos(1); // Scroll down 1 pixel to allow upwards scrolling
      disableScroll = true;
    } else if (scrollPos <= 0) {
      // Scroll to the bottom when you reach the top
      setScrollPos(scrollHeight - clonesHeight);
      disableScroll = true;
    }
  }

  if (disableScroll) {
    // Disable scroll-jumping for a short time to avoid flickering
    window.setTimeout(function () {
      disableScroll = false;
    }, 40);
  }
}

function init () {
  reCalc();
  
  context.addEventListener('scroll', function () {
    window.requestAnimationFrame(scrollUpdate);
  }, false);

  window.addEventListener('resize', function () {
    window.requestAnimationFrame(reCalc);
  }, false);
}

if (document.readyState !== 'loading') {
  init()
} else {
  doc.addEventListener('DOMContentLoaded', init, false)
}

// let slideIndex = 1;
// showSlides(slideIndex)

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//  showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
 //  if  (n > $('.slides').length) {slideIndex = 1}
// if (n < 1) {slideIndex = $('.slides').length}
 // for (i = 0; i < $('.slides').length; i++){
  //  $('.slides')[i].style.display = "none";
 // }
//  $('.slides')[slideIndex-1].style.display = "block";
// }
