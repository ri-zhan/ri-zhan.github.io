$(document).mousemove(function(e){
  $(".follower-around").css({left: e.pageX, top:e.pageY});
});

$(document).mousemove(function(e){
  $(".follower-center").css({left: e.pageX, top:e.pageY});
});




$(document.body).on('touchmove', onScroll); // for mobile
$(window).on('scroll', onScroll); 

// callback
function onScroll(){ 
    if( $(window).scrollTop() + window.innerHeight >= document.body.scrollHeight ) { 
        track_page++; 
        load_contents(track_page); 
    }
}

// $('.inner-border').hover(function(){
//   $(this).addClass('inner-border show');
// });
let position;




const showFooterLine = document.querySelectorAll('.footer');

const appearBottom = {
  rootMargin: '-96px'
};

const appeatWhenEnter = new IntersectionObserver
(function(
  entries, 
  appeatWhenEnter
  ) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // for first .content-imgs.enlarge in html, after it enlarges the width stays as enlarged width??
        entry.target.classList.add('show');

        // appearWhenCenter.unobserve(entry, target);
      } else {
        entry.target.classList.remove('show');
      }
    })
  }, appearBottom);

showFooterLine.forEach(showFooterLine =>{
  appeatWhenEnter.observe(showFooterLine);
});






$('.content').scroll(function(){
  // slowScroll($('.contentHero'));
  var scrolledAmount = ($('.content').scrollTop());
  $('.content-hero-img').css({
    'transform': 'translateY(' + scrolledAmount * 0.105 + 'px',
  });

  var slidesContainerPosition = $('.slidesContainer').position();
  var scrolledAmountRelativeSlides = ($('.content').scrollTop()) - (slidesContainerPosition.top);

  $("#slideShowRow:nth-child(even)").children($('.slidesContainer')).find($('.slides')).css({
    'transform': 'translateX(' + scrolledAmountRelativeSlides * 0.05 + 'px',
    'right': 0,
  });

  $("#slideShowRow:nth-child(odd)").children($('.slidesContainer')).find($('.slides')).css({
    'transform': 'translateX(' + (scrolledAmountRelativeSlides * -1) * 0.05 + 'px',
    'left': 0,
  });

  
  var mockupIMGposition = $('.mockupIMG-container').position();
  var scrolledAmountRelativeMockup = ($('.content').scrollTop()) - (mockupIMGposition.top);

  $('.mockupIMG').css({
    'transform': 'translateY(' + (scrolledAmountRelativeMockup * -1) * 0.08 + 'px',
    'top': -30,
  });
  
});



function contentHeroSize(){
  if($(window).width() >= 1025) {
    //desktop size
    $('#content-hero').css({
      'height': $('.content-hero-img').outerHeight() + 132 + 'px',
    });
  } else if($(window).width() >= 961) {
    //tablet size
    $('#content-hero').css({
      'height': $('.content-hero-img').outerHeight() + 132 + 'px',
    });
  } else if($(window).width() >= 481) {
    //phone size
    $('#content-hero').css({
      'height': 'fit-content',
    });
  } else {
    $('#content-hero').css({
      'height': 'fit-content',
    });
  }
};

contentHeroSize();




// const moveSlide = document.querySelectorAll('.slidesContainer');

// const appearAt = {
//   rootMargin: '0%'
// };

// const appearInFrame = new IntersectionObserver
// (function(
//   entries, 
//   appearInFrame
//   ) {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         // for first .content-imgs.enlarge in html, after it enlarges the width stays as enlarged width??
//         entry.target.classList.add('moveSlide');

//         // appearWhenCenter.unobserve(entry, target);
//       } else {
//         entry.target.classList.remove('moveSlide');
//       }
//     })
//   }, appearAt);

// moveSlide.forEach(openGIF =>{
//   appearInFrame.observe(openGIF);
// });



$('.openGIF.general-border > .GIF').css({
  'height': $('.content').height() - 96 + 'px',
  'width': $('.content').width() - 20 + 'px',
});

function GIFcontainerSize(){
  if($(window).width() >= 1025) {
    //desktop size
    $('.GIFcontainer .slidesContainer').css({
      'height': $('.content').height() - 128 + 'px',
      'width': $('.content').width() - 20 + 'px',
    });

    $('.GIFcontainer > img').css({
      'width': $('.content').width() - 256 + 'px',
    });
  } else if($(window).width() >= 961) {
    //tablet size
    $('.GIFcontainer').css({
      'height': $('.content').height()/2 + 'px',
      'width': $('.content').width() - 20 + 'px',
    });

    $('.GIFcontainer > img').css({
      'width': $('.content').width() - 48 + 'px',
    });
  } else if($(window).width() >= 481) {
    //phone size
    $('.GIFcontainer').css({
      'height': $('.content').height()/2 + 'px',
      'width': $('.content').width() - 20 + 'px',
    });

    $('.GIFcontainer > img').css({
      'width': $('.content').width() - 64 + 'px',
    });
  } else {
    $('.GIFcontainer').css({
      // 'height': $('.content').height()/2 + 'px',
      'width': $('.content').width() - 20 + 'px',
    });

    $('.GIFcontainer > img').css({
      // 'height': 100 + '%',
      'width': $('.content').width() + 'px',
    });
  }
}
GIFcontainerSize();

  


$('#slideshow').css({
  'height': ($('#slideshow > div > img')).outerHeight(),
});


const openGIF = document.querySelectorAll('.GIFcontainer, .slidesContainer');

const appearWhen = {
  rootMargin: '10%'
};

const appearAtCenter = new IntersectionObserver
(function(
  entries, 
  appearAtCenter
  ) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // for first .content-imgs.enlarge in html, after it enlarges the width stays as enlarged width??
        entry.target.classList.add('openGIF');

        // appearWhenCenter.unobserve(entry, target);
      } else {
        entry.target.classList.remove('openGIF');
      }
    })
  }, appearWhen);

openGIF.forEach(openGIF =>{
  appearAtCenter.observe(openGIF);
});



function innerBorderPos() {
  position = $('.inner-frame').children('.inner-box').eq(1).position();

  $('.inner-frame').on("transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd",function() {
    position = $('.inner-frame').children('.inner-box').eq(1).position();
  });
  $('.inner-border').css({
    'left': position.left - 12 + 'px',
    'top': position.top - 12 + 'px',
    // 'transition': 'top 0s, left 0s;'
  });

  //////////////////////// simplified inner container hover //////////////////
  $('.inner-border').css({
    'width': ($(".inner-box").outerWidth() + 24 + 'px'),
    'height': ($(".inner-box").outerHeight() + 24 + 'px')
  });
  
};

$( document ).ready(function() {
  innerBorderPos(this);
  

  $('.inner-box').mouseenter(function(){
    $(this).css({'transform': 'scale(1.025)'});
    $('.inner-border').addClass('show');
    position = $(this).position();
    $('.inner-border').css({
      'left': position.left - 12 + 'px',
      'top': position.top - 12 + 'px',
      'transition': ''
    });
  });
  
  $('.inner-box').mouseleave(function(){
    $(this).css({'transform': ''});
    $('.inner-border').removeClass('show');
    innerBorderPos(this);
  });
});






//////////////////////// inner container hover //////////////////
if ($('.inner-frame').hasClass('stylized')) {
  $('.inner-border-bottom-left').hover(
    function(){
      console.log('hover working')
      $('.inner-border-bottom-left-name').addClass('visible')
    }, function(){
      $('.inner-border-bottom-left-name').removeClass('visible')
    }
  )
  
  $('.inner-border-top-right').hover(
    function(){
      $('.inner-border-top-right-name').addClass('visible')
    }, function(){
      $('.inner-border-top-right-name').removeClass('visible')
    }
  )
  
  $('.inner-border-bottom-left').hover(
    function(){
      $('.inner-border-bottom-left-name').addClass('visible')
    }, function(){
      $('.inner-border-bottom-left-name').removeClass('visible')
    }
  )
  
  $('.inner-border-bottom-right').hover(
    function(){
      $('.inner-border-bottom-right-name').addClass('visible')
    }, function(){
      $('.inner-border-bottom-right-name').removeClass('visible')
    }
  )
}


// ///////////////// .content size based off of content-border//////////////////////////
// $(".content").css({
//   'height': ($(".content-border").height() - 12 + 'px')
// });

// $(".content").css({
//   'max-width': ($(".content-border").width() - 12 + 'px')
// });

// $(window).resize(function() {
//   $(".content").css({
//     'height': ($(".content-border").height() - 12 + 'px')
//   });
  
//   $(".content").css({
//     'max-width': ($(".content-border").width() - 12 + 'px')
//   });
// });


// /// content size based off of outer frame
// $(".content").css({
//     'max-width': ($(".outer-frame").width()/ 12 * 8 + 'px')
// });

// $(window).resize(function() {
//   $(".content").css({
//     'max-width': ($(".outer-frame").width()/ 12 * 8 + 'px')
//   });
// });






/////////////////mobile navbar

function mobileNavBarSize() {
  if($(window).width() <= 600) { 
    $('.outer-frame-btns-top-left').css({
      'height': $('.dropDownBtn').outerHeight() + 12 + 'px',
      'width': $('.dropDownBtn').outerWidth() + 12 + 'px',
    });
  
    let mobileNavBar = true;
    $('#mobileMinimized').find($('#dropDownBtnIcon')).parent($('button')).click(function(){
      if (mobileNavBar == true) {
      mobileNavBar = false;
        $('#mobileMinimized').children($('outer-frame-btns-top-left')).children($('button')).css({
          'height': 'auto',
          'position': 'inherit',
        });
  
        $('#dropDownBtnIcon').children($('.btn-icon')).css({
          'transform': 'rotate(180deg)',
        })
  
        $('#mobileMinimized').children($('outer-frame-btns-top-left')).find($('.btn-individual')).removeClass('minimized');
  
        $('.outer-frame-btns-top-left').css({
          'height': '',
          'width': '',
        });
  
      } else if (mobileNavBar == false) {
      mobileNavBar = true;
      $('#mobileMinimized').children($('outer-frame-btns-top-left')).children($('button')).css({
          'height': '',
          'position': '',
        });
  
        $('#dropDownBtnIcon').children($('.btn-icon')).css({
  
          'transform': '',
        })
  
  
        $('#mobileMinimized').children($('outer-frame-btns-top-left')).find($('.btn-individual')).addClass('minimized');
  
        $('.outer-frame-btns-top-left').css({
          'height': $('.content-container').outerHeight() + 'px',
          'width': $('.dropDownBtn').outerWidth() + 16 + 'px',
        });
      };
  
    });
  }
}

mobileNavBarSize();


$('#minimized').find($('.outer-frame-btns-bottom-right, .outer-frame-btns-bottom-left, .outer-frame-btns-top-left')).hover(function() {
  $('.btn-individual').toggleClass('minimized');
});


function GIFcontainerSize(){
  if($(window).width() >= 1025) {
    //desktop size
    $('.GIFcontainer').css({
      'height': $('.content').height() - 128 + 'px',
      'width': $('.content').width() - 20 + 'px',
    });

    $('.GIFcontainer > img').css({
      'width': $('.content').width() - 256 + 'px',
    });
  } else if($(window).width() >= 961) {
    //tablet size
    $('.GIFcontainer').css({
      'height': $('.content').height()/2 + 'px',
      'width': $('.content').width() - 20 + 'px',
    });

    $('.GIFcontainer > img').css({
      'width': $('.content').width() - 48 + 'px',
    });
  } else if($(window).width() >= 481) {
    //phone size
    $('.GIFcontainer').css({
      'height': $('.content').height()/2 + 'px',
      'width': $('.content').width() - 20 + 'px',
    });

    $('.GIFcontainer > img').css({
      'width': $('.content').width() - 64 + 'px',
    });
  } else {
    $('.GIFcontainer').css({
      'height': $('.content').height()/2.5 + 'px',
      'width': $('.content').width() - 20 + 'px',
    });

    $('.GIFcontainer > img').css({
      'width': $('.content').width() - 32 + 'px',
    });
  };
};
GIFcontainerSize();



function navBar(){
  if($(window).width() >= 481) {
    // $('.outer-frame').removeClass('minimized');

  } else {
    // small phone
    $('.outer-frame').addClass('minimized');
    $('#minimized').addClass('minimized');
    $('#mobileMinimized').addClass('mobileMinimized');

  };
};
navBar();



function outerFrameSize() {
  if($(window).width() >= 1025) {
    //desktop size
    $('.outer-frame-border-individual').css({
      'height': $(".outer-frame-border-individual").width() + 'px',
      'width': '100%', 
    });
    


  } else if($(window).width() >= 961) {
    //tablet size
    $('.outer-frame-border-individual').css({
      'height': $(".outer-frame-border-individual").width() + 'px',
      'width': '100%',
    });


  } else if($(window).width() >= 481) {
    //phone size
    $('.outer-frame-border-individual').css({
      'height': 2 + 'rem',
      'width': 2 +'rem'
    });

  } else {
    // small phone
    $('.outer-frame-border-individual').css({
      'height': 1 + 'rem',
      'width': 1 +'rem'
    });


    $('#mobileMinimized').css({
      'width': $('.content').innerWidth() + 'px',
      'height': $('.outer-frame').height() - 4+ 'px',
    })
  }
};








outerFrameSize();

$(window).resize(function() {
  outerFrameSize();

  GIFcontainerSize();

  contentHeroSize();

  innerBorderPos();
  
  navBar();
  
  mobileNavBarSize();
});





///////////// set .filmstrip width/////////////////
$('.filmstrip').each(function(){
  let thisFilmstrip = $(this);
  let imgWidth;
  let imgCount;

   thisFilmstrip.on(
      "transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd",
      function() {
          imgWidth = thisFilmstrip.find($('.filmstrip-img')).innerWidth();
          console.log('width ' + imgWidth)
          
          imgCount = thisFilmstrip.find($('.filmstrip-imgs')).children().length;
          console.log('img count is '+ imgCount)   

          $(this).css({
            'width': (imgWidth * (imgCount) + 24 +'px')
          });   
     
    });
})

// $('.content-imgs').css('opacity', '0.4')   


// /////////////// change height of .content-imgs when it reaches center of screen.
// const enlargeSize = document.querySelectorAll('.content-imgs');

// const appearOptions = {
//   rootMargin: '-50% 0% -50% 0%'
// };

// const appearWhenCenter = new IntersectionObserver
// (function(
//   entries, 
//   appearWhenCenter
//   ) {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         // for first .content-imgs.enlarge in html, after it enlarges the width stays as enlarged width??
//         entry.target.classList.add('enlarge');

        
//         $('.filmstrip').each(function(){
//           let thisFilmstrip = $(this);
//           let imgWidth;
//           let imgCount;

//            thisFilmstrip.on(
//               "transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd",
//               function() {
//                   imgWidth = thisFilmstrip.find($('.filmstrip-img')).innerWidth();
//                   console.log('width ' + imgWidth)
                  
//                   imgCount = thisFilmstrip.find($('.filmstrip-imgs')).children().length;
//                   console.log('img count is '+ imgCount)   

//                   $(this).css({
//                     'width': (imgWidth * (imgCount) + 16 +'px')
//                   });                 
//                   $(this).parent('.content-imgs').css('opacity', '1')           

//             });
//         })

//         // appearWhenCenter.unobserve(entry, target);
//         // })
//       } else {
//         entry.target.classList.remove('enlarge');

//         $('.filmstrip').each(function(){
//           let thisFilmstrip = $(this);
//           let imgWidth;
//           let imgCount;

//            thisFilmstrip.on(
//               "transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd",
//               function() {
//                   imgWidth = thisFilmstrip.find($('.filmstrip-img')).innerWidth();
//                   console.log('width ' + imgWidth)
                  
//                   imgCount = thisFilmstrip.find($('.filmstrip-imgs')).children().length;
//                   console.log('img count is '+ imgCount)   

//                   $(this).css({
//                     'width': (imgWidth * (imgCount) + 16 +'px')
//                   });     
//                   $(this).parent('.content-imgs').css('opacity', '0.4')           
//             });
//         })
//       }
//     })
//   }, appearOptions);

// enlargeSize.forEach(enlargeSize =>{
//   appearWhenCenter.observe(enlargeSize);
// })


/////////////// animate section-heading upon entering screen
const expandHeading = document.querySelectorAll('.section-heading');

const appearOptions = {
  rootMargin: '10%'
};

const appearWhenCenter = new IntersectionObserver
(function(
  entries, 
  appearWhenCenter
  ) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // for first .content-imgs.enlarge in html, after it enlarges the width stays as enlarged width??
        entry.target.classList.add('expand');
      
        // appearWhenCenter.unobserve(entry, target);
      } else {
        entry.target.classList.remove('expand');
      }
    })
  }, appearOptions);

expandHeading.forEach(expandHeading =>{
  appearWhenCenter.observe(expandHeading);
})





$('.play-card').click(function() {
  if ($(this).hasClass('play-card-expand')) {
    $('.play-card').removeClass('play-card-expand')
    $(this).css({
      'width': '',
    });
    $(this).delay(500).queue(function() { 
      $(this).css('z-index','').dequeue();
    });
  } else {
    $(this).addClass('play-card-expand')
    let expandedWidth = $('.play-container').width() - $('.play-card').outerWidth() - 16 + 'px';
    $(this).css({
      'width': expandedWidth,
      'z-index': '999999',
    });
  }
});


const target = document.getElementById("target");

document.addEventListener("wheel", function(e){
  // prevent the default scrolling event
  // e.preventDefault();

  // scroll the div
  target.scrollBy(e.deltaX, e.deltaY);
})



// $(".expand").css({
//   'width': ((($(".play-column").width() + 16) * 4) - 16 + 'px'),
//   'position': 'absolute',
//   'left': '0'
// });

// $(".play-card").css({
//     'width': $('.play-column'),
//     'left': 'auto'
//   });


// $('.play-card').each(function() {
//   var playCardTag = $('.play-card-text');
//   var playCard = $( this );
//   var playDescription = $('.play-description')
//   playCard.click(function() {
//     playCardTag.find($('.tag')).hasClass($('.art-history'));
    // $('.art-history').css("display", "flex");
//   });
// });







// function myFunction() {
//   let date = $('.play-date')
//   var x = document.getElementById("myDIV");
//   if (x.innerHTML === "Hello") {
//     x.innerHTML = "Swapped text!";
//   } else {
//     x.innerHTML = "Hello";
//   }
// }







///////////////////////////////////////////////// infinite scroll loop
// var doc = window.document,
//   context = doc.querySelector('.js-loop'),
//   clones = context.querySelectorAll('.is-clone'),
//   disableScroll = false,
//   scrollHeight = 0,
//   scrollPos = 0,
//   clonesHeight = 0,
//   i = 0;

// function getScrollPos () {
//   return (context.pageYOffset || context.scrollTop) - (context.clientTop || 0);
// }

// function setScrollPos (pos) {
//   context.scrollTop = pos;
// }

// function getClonesHeight () {
//   clonesHeight = 0;

//   for (i = 0; i < clones.length; i += 1) {
//     clonesHeight = clonesHeight + clones[i].offsetHeight;
//   }

//   return clonesHeight;
// }

// function reCalc () {
//   scrollPos = getScrollPos();
//   scrollHeight = context.scrollHeight;
//   clonesHeight = getClonesHeight();

//   if (scrollPos <= 0) {
//     setScrollPos(1); // Scroll 1 pixel to allow upwards scrolling
//   }
// }

// function scrollUpdate () {
//   if (!disableScroll) {
//     scrollPos = getScrollPos();

//     if (clonesHeight + scrollPos >= scrollHeight) {
//       // Scroll to the top when you’ve reached the bottom
//       setScrollPos(1); // Scroll down 1 pixel to allow upwards scrolling
//       disableScroll = true;
//     } else if (scrollPos <= 0) {
//       // Scroll to the bottom when you reach the top
//       setScrollPos(scrollHeight - clonesHeight);
//       disableScroll = true;
//     }
//   }

//   if (disableScroll) {
//     // Disable scroll-jumping for a short time to avoid flickering
//     window.setTimeout(function () {
//       disableScroll = false;
//     }, 40);
//   }
// }

// function init () {
//   reCalc();
  
//   context.addEventListener('scroll', function () {
//     window.requestAnimationFrame(scrollUpdate);
//   }, false);

//   window.addEventListener('resize', function () {
//     window.requestAnimationFrame(reCalc);
//   }, false);
// }

// if (document.readyState !== 'loading') {
//   init()
// } else {
//   doc.addEventListener('DOMContentLoaded', init, false)
// }




// /*content-imgs scroll*/
// var page = document.getElementById('content-imgs-loop');
// var last_loop = page.getElementsByClassName('loop');
// last_loop = last_loop[last_loop.length-1];
// var dummy_x = null;

// window.onscroll = function () {
//   // content-imgs Scroll.
//   var y = document.body.getBoundingClientRect().top;
//   page.scrollLeft = -y;
  
//   // Looping Scroll.
//   var diff = window.scrollY - dummy_x;
//   if (diff > 0) {
//     window.scrollTo(0, diff);
//   }
//   else if (window.scrollY == 0) {
//     window.scrollTo(0, dummy_x);
//   }
// }
// // Adjust the body height if the window resizes.
// window.onresize = resize;
// // Initial resize.
// resize();

// // Reset window-based vars
// function resize() {
//   var w = page.scrollWidth-window.innerWidth+window.innerHeight;
//   document.body.style.height = w + 'px';
  
//   dummy_x = last_loop.getBoundingClientRect().left+window.scrollY;
// }



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

