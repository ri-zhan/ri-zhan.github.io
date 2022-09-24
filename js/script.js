$(document).mousemove(function(e){
  $(".follower-around").css({left: e.pageX, top:e.pageY});
});

$(document).mousemove(function(e){
  $(".follower-center").css({left: e.pageX, top:e.pageY});
});


//////////////////////// simplified inner container hover //////////////////
$('.inner-border').css({
  'width': ($(".inner-box").outerWidth() + 24 + 'px'),
  'height': ($(".inner-box").outerHeight() + 24 + 'px')
});

// $('.inner-border').hover(function(){
//   $(this).addClass('inner-border show');
// });
let position;


$( document ).ready(function() {
  innerBorderPos(this);
});


function innerBorderPos() {
  position = $('.inner-frame').children('.inner-box').eq(1).position();
  $('.inner-border').css({
    'left': position.left - 12 + 'px',
    'top': position.top - 12 + 'px',
    // 'transition': 'top 0s, left 0s;'
  });
};

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


$('.outer-frame-border-individual').css({
  'height': $(".outer-frame-border-individual").width() + 'px',
})

$('.outer-frame-btns').css({
  'height': $('.outer-frame-border').height() - 12 + 'px',
  'width': $('.outer-frame-border').width() - 12 + 'px',
})


// $('.btn-individual').css({
//   'width': $('.outer-frame-border').width() - 12 + 'px',
// })

// $('.outer-frame').hover(function(){
//   $(this).css({
//     'z-index': '999',
//   });
// });

$('.outer-frame-btns-bottom-right, .outer-frame-btns-bottom-left').hover(function() {
  $('.btn-individual').toggleClass('minimized');
});


$(window).resize(function() {

  // $('.inner-border').css({
  //   'width': ($(".inner-box").outerWidth() + 24 + 'px'),
  //   'height': ($(".inner-box").outerHeight() + 24 + 'px')
  // });
  
  $('.outer-frame-border-individual').css({
    'height': $(".outer-frame-border-individual").width() + 'px',
  })
  
  $('.outer-frame-btns').css({
    'height': $('.outer-frame-border').height() - 12 + 'px',
    'width': $('.outer-frame-border').width() - 12 + 'px',
  })
});


// ///////////////content-about-heading height
// $('.content-about-heading').css({
//   'height': ($('.content-about-box')).height(),
// });




///////////// set .content-imgs width/////////////////
$(".content-imgs").css({
  'width': ($(".content").width() - 1 + 'px') 
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
  rootMargin: '-10% 0% 0% 0%'
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


// /////////////// horizontal movement as vertical scroll
// const moveHorizontal = document.querySelectorAll('.content-imgs');

// const appearOptions = {
//   rootMargin: '0% 0% 0% 0%'
// };

// const appearWhenCenter = new IntersectionObserver
// (function(
//   entries, 
//   appearWhenCenter
//   ) {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         // for first .content-imgs.enlarge in html, after it enlarges the width stays as enlarged width??
//         entry.target.classList.add('moveHorizontal');

//         // start at left (0%) then move to right 100%
//         // get width off screen
//         // on scroll move left to right
//         // top 0% bottom 100%, left to right

//         // change contnet images to hidden not scroll
//         // get (contents-imgsLeftPos/content-imgs) * 100

//         // make y  = 100/ screenPercentage

//         var lastScrollTop = 0;
//         $(window).scroll(function(event){
//           var st = $(this).scrollTop();
//           if (st > lastScrollTop){
//               // downscroll code
//           } else {
//               // upscroll code
//           }
//           lastScrollTop = st;
//         });

//         $('.filmstrip').each(function(){
//           $(this).mousemove(function(e){
//             $(".follower-around").css({left: e.pageX, top:e.pageY});
//           });
//         });


//         $(document).mousemove(function(e){
//           $(".follower-around").css({left: e.pageX, top:e.pageY});
//         });
        
//         $(document).mousemove(function(e){
//           $(".follower-center").css({left: e.pageX, top:e.pageY});
//         });

        
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
//         });

//         // appearWhenCenter.unobserve(entry, target);
//         // })
//       } else {
//         entry.target.classList.remove('moveHorizontal');

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


/////////////////////////show play-description-text depending on tag
// if ($('.play-card').selected==True) {
//   //show play description by default
//   if ($('.play-card-text').hasClass($('.art-history'))) {
//     // if ($('.play-card-text').hasClass($('.p')))
//     //////////if the card clicked on has art history tag then replace with art histry description
//   }
//   if ($('.photography')) {
//  //////////if the card clicked on has photography tag then replace with photography description
//   }
//   if ($('.projects')) {
//  //////////if the card clicked on has projects tag then replace with projects description
//   }
// }




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
  e.preventDefault();

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

