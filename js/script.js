    
let desktopSize = ($(window).width() >= 1025);
let tabletSize = ($(window).width() <= 1025 && $(window).width() >=600);
let mobileSize=($(window).width() <= 600);
    

$( "h1" ).prepend( "# " );
$( "h2" ).prepend( "## " );
$( "h3" ).prepend( "### " );
$( "h4" ).prepend( "#### " );
// $( "h5" ).prepend( "##### " );


// landing page to about me link hover function
$('.intro-title, .intro-subtitle').mouseenter(function(){
  $('.intro-icon').css({
    'color': '#E63223',
  });
});

$('.intro-title, .intro-subtitle').mouseleave(function(){
  $('.intro-icon').css({
    'color': '',
  });
});


// smooth scrolling to div within page
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


window.onload = function () {
  introPos = $('.intro')
  
  if($(window).width() >= 600) {
    $('.projects').css({
      'padding-top': introPos.position().top,
      'padding-bottom': introPos.position().top,
    })
  }
};



// load image before rest of the page loads
$(function(){
  $.each(document.images, function(){
              var this_image = this;
              var src = $(this_image).attr('src') || '' ;
              if(!src.length > 0){
                  //this_image.src = options.loading; // show loading
                  var lsrc = $(this_image).attr('lsrc') || '' ;
                  if(lsrc.length > 0){
                      var img = new Image();
                      img.src = lsrc;
                      $(img).load(function() {
                          this_image.src = this.src;
                      });
                  }
              }
          });
});




var totalImages = 0;
var loadCounter = 0;

function incrementLoadCounter() {
   loadCounter++;
   if(loadCounter === totalImages) {
      $(document).trigger('everythingLoaded');
   }
}

function hideLoadingScreen() {
   $('#loadingScreen').hide();
   $('#divWithImages').show();
}

$(document).ready(function(e) {
    $('#loadingScreen').bind('everythingLoaded', function(e) {
        hideLoadingScreen();
    });
    var imagesToLoad = $('img.toLoad');
    totalImages = imagesToLoad.length;

    $.each(imagesToLoad, function(i, item) {
        $(item).load(function(e) {
           incrementLoadCounter();
        })
    });

    // menuSize();
})

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



// scroll to sections using top bar

// $("#sidebar > ul > li > a").click(function(e) 
$(".section-nav").click(function(e) { 
  $(window).scrollTop(0, 0);
  // console.log($(this).attr('id') + ' clicked')
  // Prevent a page reload when a link is pressed
  e.preventDefault(); 
  // Call the scroll function
  // goToByScroll($(this).id);  
  identifier = $(this).attr('id').replace("link", "");
  // console.log('offset' + $('#' + identifier).offset().top)

  pos = -160
    // Scroll
  $('.content').stop(true,true).animate({
    scrollTop: $('#' + identifier).position().top + pos + $(".content").scrollTop() + 'px'
    // scrollTop: 200
  }, 1000);      
});




/////////////// 

const sideBarprep = document.querySelectorAll('.child-section');

const opacityChangeprep = {
  rootMargin: '-40% 0% -60% 0%'
  //top right bottom left
};

const appearWhenInCenterprep = new IntersectionObserver
(function(
  entries,     
  appearWhenInCenterprep
  ) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {

        if($(window).width() >= 600) {
          const sideBar = document.querySelectorAll('.child-section');

          const opacityChange = {
            rootMargin: '-30% 0% -50% 0%'
          };
          
          const appearWhenInCenter = new IntersectionObserver
          (function(
            entries,     
            appearWhenInCenter
            ) {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
          
                  if($(window).width() >= 600) {

                      entry.target.classList.add('.selected');

                      // entry.target.IDList.replace("link", "")
                      // console.log( entry.target.classList)
                      // console.log(entry.target.id + 'link')
                      thisDiv = '#' +entry.target.id + 'link'
                      // console.log(jQuery(this))
          
                      // jQuery(this).attr('id', newID);
                      jQuery(thisDiv).addClass('selected');
                      // jQuery(thisDiv).removeClass('selected');
          
                      // jQuery(thisDiv).addClass('deselected');
                      jQuery(thisDiv).removeClass('deselected');
                  }
                  
                 
          
                  // appearWhenCenter.unobserve(entry, target);
                } else {
                  if($(window).width() >= 600) {
          
                      entry.target.classList.remove('.selected');
                                // console.log( entry.target.classList)
                      // console.log(entry.target.id + 'link')
                      thisDiv = '#' +entry.target.id + 'link'
                      // console.log(jQuery(this))
          
                      // jQuery(this).attr('id', newID);
                      jQuery(thisDiv).removeClass('selected');
                      // jQuery(thisDiv).addClass('selected');
          
                      // jQuery(thisDiv).removeClass('deselected');
                      jQuery(thisDiv).addClass('deselected');
          
                  }
                }
              })
            }, opacityChange);
          
            sideBar.forEach(sideBar =>{
            appearWhenInCenter.observe(sideBar);
            });

        }
        // appearWhenCenter.unobserve(entry, target);
      } else {
        if($(window).width() >= 600) {
          $('.section-nav').addClass('selected');
          
        }
      }
    })
  }, opacityChangeprep);

  sideBarprep.forEach(sideBarprep =>{
  appearWhenInCenterprep.observe(sideBarprep);
});



// $('.imgZoomParent').mousemove(function(e){
//   console.log(e.pageX -  $(this).parent().offset().left)
//   console.log(e.pageY - ($(this).parent().offset().top*2))
//   $(this).find($('.imgZoom')).css({
//     left: (e.pageX -  $(this).parent().offset().left), 
//     top: (e.pageY - $(this).parent().offset().top),
//   });
// });





function followerReact(divReact) {
  divReact.mouseenter(function(){
    $('.follower-center').css({
      'width': '2rem',
      'height': '2rem'
    })
  })

  divReact.mouseleave(function(){
    $('.follower-center').css({
      'width': '',
      'height': ''
    });
  })
} 

followerReact($('.inner-box, a, .divReact'))

// $('.inner-box, a, .regimg').on({
//   mouseenter: function () {
//       $('.follower-center').css({
//         'width': '2rem',
//         'height': '2rem'
//       });
//   },
//   mouseleave: function () {
//     $('.follower-center').css({
//       'width': '',
//       'height': ''
//     });
//   }
// });

function clickMenu() {
  
    $('#dropDownBtn').click(function(){

      //closes
      if ($('.outer-frame-btns').hasClass('open')) {

        ($('.outer-frame-btns').removeClass('open'))

        $('.outer-frame-btns').css({
          'height': $('#dropDownBtn').height()
        })

        $('.outer-frame-text').css({
          'width': '100%',
        })

      } else {

        var totalHeight = 0;

        $(".outer-frame-btns").children().each(function(){
            totalHeight = totalHeight + $(this).outerHeight(true);
        });
        //opens
        ($('.outer-frame-btns').addClass('open'))

        $('.outer-frame-btns').css({
          'height': totalHeight,
        })

        $('.outer-frame-text').css({
          'width': '100%',
        })

      };
    });

};
// clickMenu();




$('.slides-slides').css({
  'height': '100%' - '16px',
})


$('.play-box').find($('.slidesContainer')).css({
    'padding': '1rem 0rem'
  })
  
$('.play-box').find($('.slides-slides')).css({
  'left': '0',
})

$('.content').scroll(function(){
  // slowScroll($('.contentHero'));
  var scrolledAmount = ($('.content').scrollTop());
  $('#contentIMGtext').css({
    'transform': 'translateY(' + scrolledAmount * 0.105 + 'px',
  });

  $('#contentIMG').css({
    'transform': 'translateY(' + scrolledAmount * 0.1 + 'px',
  });


  var nav = $('.slidesContainer');
  if (nav.length) {
    // prevents the "uncaught typeeroor message in console"

    var slidesContainerPosition = $('.slidesContainer').position();
    var scrolledAmountRelativeSlides = ($('.content').scrollTop()) - (slidesContainerPosition.top);

  }

  $('.slides').css({
    'height': $('.slidesContainer').height() - 32,
  })

  $(('.slidesContainer')).find($('.slides-slides')).css({
    'transform': 'translateX(' + (scrolledAmountRelativeSlides) * -0.08 + 'px',
    // 'right': 0,
    // if (mobileSize) {
    //   $(('.slidesContainer.openGIF')).find($('.slides-slides')).css({
    //     'transform': '',
    //     'right': '',
    //   })
    // }
  });
  
  
  var mockupIMGposition = $('.mockupIMG-container').position();

  var nav = $('.content');
  if (nav.length) {
    // prevents the "uncaught typeeroor message in console"
    var scrolledAmountRelativeMockup = ($('.content').scrollTop()) - (mockupIMGposition.top);

  }

  $('.mockupIMG').css({
    'transform': 'translateY(' + (scrolledAmountRelativeMockup * -1) * 0.08 + 'px',
    'top': 0,
  });
  
});








function topBarSize() {
  $('.container111, .container111-container').css({
    'width': $('.content').width(),
  });
}
// topBarSize();


$('.openGIF.general-border > .GIF').css({
  'height': $('.content').height() - 96 + 'px',
  'width': $('.content').width() - 20 + 'px',
});



// GIFcontainerSize();

// $('#column-4a-expand').children('.regimg').click(function() {
//   $('.column-4-4').toggleClass('column-4a-clicked');
// });

// $('#column-4b-expand').children('.regimg').click(function() {
//   $('.column-4-4').toggleClass('column-4b-clicked')
// });


$('#slideshow').css({
  'height': ($('#slideshow > div > img')).outerHeight(),
});


// const openGIF = document.querySelectorAll('.GIFcontainer, .fullRow > .slidesContainer, #fullRowImg');

// const appearWhen = {
//   rootMargin: '10%'
// };

// const appearAtCenter = new IntersectionObserver
// (function(
//   entries, 
//   appearAtCenter
//   ) {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         // for first .content-imgs.enlarge in html, after it enlarges the width stays as enlarged width??
//         // if($(window).width() >= 600) {
//           entry.target.classList.add('openGIF');
//           // }
//           // appearWhenCenter.unobserve(entry, target);
//         } else {
//           // if($(window).width() >= 600) {
            
//             entry.target.classList.remove('openGIF');
//             // }
//           }
//         })
//       }, appearWhen);
      
//       openGIF.forEach(openGIF =>{
//         appearAtCenter.observe(openGIF);
//       });
      
      
      
      
function innerBorderPos() {
  position = $('.projects').children('.inner-box').position();
  
  var nav = $('.projects');
  if (nav.length) {
    // prevents the "uncaught typeeroor message in console"
    // $('.inner-box-container-container').on("transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd",function() {
      //   position = $('.inner-box-container-container').children('.inner-box').eq(1).position();
      // });
      $('.inner-border').css({
        // 'left': position.left - 12,
        // 'top': position.top - 12,
        'left': position.left,
        'top': position.top,

        // 'transition': 'top 0s, left 0s;'
      });
    }
};


$( document ).ready(function() {
  
  // calculate inner-border position and size
  innerBorderPos(this);
  
  let currentBox;
  if($(window).width() >= 600) {

    $('.inner-box').mouseenter(function(){
      currentBox = $(this);


      $('.inner-border').addClass('show');

      $(this).toggleClass('project-hover');

      position = $(this).position();
      
      $('.inner-border').css({
        'left': position.left - 6 + 'px',
        'top': position.top - 6 + 'px',
        'transition': ''
      });

      if ($(this).hasClass('expand')) {
        $(this).css({'transform': 'scale(1)'});
        $('.inner-border').removeClass('show');
      }

        //////////////////////// simplified inner container hover //////////////////
      
      $('.inner-border').css({
        'width': ($(this).outerWidth() + 12 + 'px'),
        'height': ($(this).outerHeight() + 12 + 'px')
      });

    });

    $('.inner-box').mouseleave(function(){
      $(this).css({
        'background-color': '',
        'color': '',
      });
      $(this).find('h4, p').css({'color': '',});
      $('.inner-border').removeClass('show');

      $(this).toggleClass('project-hover');
    });

  }

    // disable dyanmic heading width on mobile
    if($(window).width() <= 600) {
      $(document).find($('.section-heading, .divider')).addClass('expand');
    }

});
  
  
  
let playPos;
let playHeight;
let playWidth;

function playCardPos() {
  $('.play-box').each(function(){
    playWidth = ($('.play-box-container').width() / 4);
    playHeight = ($('.play-box-container').height() / 2);
    // if ($(this).attr('data-vertical') == 1) {
      $(this).css({
        'left': (playWidth * $(this).attr('data-horizontal')) + ($(this).attr('data-horizontal') * 8),
        'top': (playHeight * $(this).attr('data-vertical')) + ($(this).attr('data-vertical') * 8),
      });
    // } else {
    //   $(this).css({
    //     'background-color': 'yellow',
    //     'z-index': '99999',
    //     'top': 0,
    //     'left': (playWidth *  $(this).attr('data-horizontal')) + ($(this).attr('data-horizontal') * 4),
    //   });
    // };
  });
}

// playCardPos();


// $('.content-cover').click(function() {

//   if($('.play-box-container').children().hasClass('expand')) {

//     $('.play-box-container').find($('.play-box')).removeClass('expand');
//     $('.play-box-container').find($('.play-box')).removeClass('collpase');
//     $('.play-box-container').find($('.play-box')).css({'transform': ''});
  
//     $(this).css({
//       'background-color': '',
//       'position': '',
//       'width': '',
//       'height': '',
//     });
  
//     $(this).on(
//       "transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd",
//       function() {
//           $(this).css({
//             'z-index': '',
//           });
//     });
//     $('.content-cover').css('pointer-events', '');
//   }

// });



// $('.play-box').click(function() {
//   $('.play-border').removeClass('show');

//   $(this).parent().children().not($(this)).toggleClass('collapse');

//   // if ($('.play-box').hasClass('expand')){
//   //   $('.play-box.expand').css({'transform': 'scale(1)'});
//   //   $('.play-border').addClass('show');
//   // };
//   $(this).css({'transform': 'scale(1)'});

//   if ($(this).hasClass('expand')) {
//     $(this).removeClass('expand');
    

//     playCardPos();
//     $(this).css({
//       'background-color': '',
//       'position': '',
//       'width': '',
//       'height': '',
//     });

//     $(this).on(
//       "transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd",
//       function() {
//           $(this).css({
//             'z-index': '',
//           });
//     });

//   } else {
//     $(this).addClass('expand');
//     $('.play-border').addClass('show');


//     $(this).css({
//       // 'background-color': 'yellow',
//       'width': '100%',
//       'height': '100%',
//       'top': '0',
//       'left': '0',
//       'z-index': '999',
//     });
//   };
// });
        
        
        
        
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
                



/////////////////mobile navbar

// function navBarSize() {
//   if($(window).width() <= 600) { 
//     $( document ).ready(function() {
//       $('#mobileMinimized').css({
//         'width': $('#dropDownBtn').outerWidth() + 'px',
//       });
//     });

//     let mobileNavBar = false;
    
//     $('#minimized').css({
//       'display': 'none',
//     })
    
//     $('#mobileMinimized').css({
//       'display': 'flex',
//     })

//     $('#minimized').removeClass('minimized');
//     $('#mobileMinimized').removeClass('mobileMinimized');
//     $('.a.button').removeClass('minimized');


//     $('.outer-frame-btns').css({
//       'height': $('#dropDownBtn').height(),
//     });


//   } else if($(window).width() >= 600){
//     $('#minimized').css({
//       'display': 'grid',
//     });
    
//     $('#mobileMinimized').css({
//       'display': 'none',
//     });

//     $('#minimized').addClass('minimized');
//     $('#mobileMinimized').addClass('mobileMinimized');
//     $('a.button').addClass('minimized');

//     $('.outer-frame-btns').css({
//       'height': '',
//     });
//   }
// }









// function navBar(){
//   if($(window).width() >= 481) {
  //     // $('.outer-frame').removeClass('minimized');

  //   } else {
    //     // small phone
    //     $('.outer-frame-btns').addClass('minimized');
    //     $('#minimized').addClass('minimized');
    //     $('#mobileMinimized').addClass('mobileMinimized');
    
    //   };
    // };
    // navBar();
  


function typewriterDivSize(){
  if($(window).width() >= 1025) {
    //desktop size
    $('.typewriterDiv').css({
      // 'width': $('#project1').width() + $('#project2').width() +$('#project3').width(),
      'top': $('.inner-frame.simplified').position().top - 40 + 'px',
    });
  } else if($(window).width() >= 961) {
    //tablet size
    $('.typewriterDiv').css({
      // 'width': $('#project1').width() + $('#project2').width() +$('#project3').width(),
      'top': $('.inner-frame.simplified').position().top
    });
  } else if($(window).width() >= 481) {
    //phone size
    $('.typewriterDiv').css({
      'top': $('.inner-frame.simplified').position().top

    });
  } else {
    $('.typewriterDiv').css({
      'top': $('.inner-frame.simplified').position().top

    });
  }
};

// typewriterDivSize();

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
    $('.GIFcontainer').addClass('openGIF');
    $('.slidesContainer').addClass('openGIF');


  } else {
    $('.GIFcontainer').css({
      'height': $('.content').height()/2.5 + 'px',
      'width': $('.content').width() - 20 + 'px',
    });

    $('.GIFcontainer > img').css({
      'width': $('.content').width() - 32 + 'px',
    });
    $('.GIFcontainer').addClass('openGIF');
    $('.slidesContainer').addClass('openGIF');


  };
};

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
      // 'height': $('.content').height()/2 + 'px',
      'width': $('.content').width() - 20 + 'px',
    });

    $('.GIFcontainer > img').css({
      // 'height': 100 + '%',
      'width': $('.content').width() + 'px',
    });
  }
}


// function contentHeroSize(){
//   setInterval(function () {
//     if($(window).width() >= 1025) {
//       //desktop size
//       $('#content-hero').css({
//         'height': $('.content-hero-img').outerHeight() + 170 + 'px',
//       });
//     } else if($(window).width() >= 961) {
//       //tablet size
//       $('#content-hero').css({
//         'height': $('.content-hero-img').outerHeight() + 170 + 'px',
//       });
//     } else if($(window).width() >= 481) {
//       //phone size
//       $('#content-hero').css({
//         'height': '20rem',
//       });
//     } else {
//       $('#content-hero').css({
//         'height': '20rem',
//       });
//     }
// }, 10);
// };
// contentHeroSize();




function outerFrameSize() {
  if(desktopSize) {
    //desktop size

    //outerFrame
    $('.outer-frame-border-individual').css({
      'height': $(".outer-frame-border-individual").width() + 'px',
      'width': '100%', 
    });
    

    //mobile view
    $('.mobileViewUnavail').removeClass('show');
    $('.inner-box').css({
      'z-index': ''
    });

    $('.doNotShow').css({
      'display': ''
    });

    
  } else if(tabletSize) {
    //tablet size

    //outerFrame

    $('.outer-frame-border-individual').css({
      'height': $(".outer-frame-border-individual").width() + 'px',
      'width': '100%',
    });



    //mobile view
    $('.mobileViewUnavail').removeClass('show');
    $('.inner-box').css({
      'z-index': ''
    });

    $('.doNotShow').css({
      'display': ''
    });
  } else if(mobileSize) {
    //phone size

    //outerFrame
    $('.outer-frame-border-individual').css({
      'height': 2 + 'rem',
      'width': 2 +'rem'
    });


    //mobile view
    $('.mobileViewUnavail').addClass('show');

    $('.inner-box').css({
      'z-index': '0',
    });

    $('.doNotShow').css({
      'display': 'none'
    });

  } else {
    // small phone

    //outerFrame
    $('.outer-frame-border-individual').css({
      'height': 1 + 'rem',
      'width': 1 +'rem'
    });


    //mobileView
    $('.mobileViewUnavail').removeClass('show');
    $('.inner-box').css({
      'z-index': ''
    });

    $('.doNotShow').css({
      'display': ''
    });
  }
};
outerFrameSize();


if  ($('.mobileViewUnavail').hasClass('show')) {
  $('.pageUnavail.show').css({
    'display': 'none'
  })
}



$(window).resize(function() {

  clickMenu();

  
  // playCardPos();

  // mobileViewUnavail();

  // navBarSize();

  outerFrameSize();

  GIFcontainerSize();

  contentHeroSize();

  innerBorderPos();  

  topBarSize();

  typewriterDivSize();

  // menuSize();

  if($(window).width() <= 600) { 
    $('.a.button').removeClass('minimized');
  } else {
    $('.a.button').addClass('minimized');
  }
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
          // console.log('width ' + imgWidth)
          
          imgCount = thisFilmstrip.find($('.filmstrip-imgs')).children().length;
          // console.log('img count is '+ imgCount)   

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
const expandHeading = document.querySelectorAll('.section-heading, .divider');

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
        if($(window).width() >= 600) {

          entry.target.classList.add('expand');
        }
        // appearWhenCenter.unobserve(entry, target);
      } else {
        if($(window).width() >= 600) {

          entry.target.classList.remove('expand');
        }
      }
    })
  }, appearOptions);

expandHeading.forEach(expandHeading =>{
  appearWhenCenter.observe(expandHeading);
})









// function playBorderPos() {
//   position = $('.play-box-container').children('.play-box').eq(1).position();

//   var nav = $('.play-box-container');
//   if (nav.length) {
//     // prevents the "uncaught typeeroor message in console"
//     $('.play-box-container').on("transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd",function() {
//       position = $('.play-box-container').children('.play-box').eq(1).position();
//     });
//     $('.play-border').css({
//       'left': position.left - 12 + 'px',
//       'top': position.top - 12 + 'px',
//     });
//   }



//   //////////////////////// simplified play container hover //////////////////

//   $('.play-border').css({
//     'width': ($(".play-box").outerWidth() + 24 + 'px'),
//     'height': ($(".play-box").outerHeight() + 24 + 'px')
//   });
  
// };

// // $( document ).ready(function() {
  
//  $('.play-frame').mouseenter(function() {
//   $('.play-box').mouseenter(function(){
//     $(this).css({'transform': 'scale(1.025)'});
//     $('.play-border').addClass('show');
//     position = $(this).position();
//     $('.play-border').css({
//       'left': position.left - 12 + 'px',
//       'top': position.top - 12 + 'px',
//       'transition': ''
//     });
//     playBorderPos(this);
//   });
  
//   $('.play-box').mouseleave(function(){
//     $(this).css({'transform': ''});
//     $('.play-border').removeClass('show');
//     playBorderPos(this);
//   });
//   playBorderPos(this);
//  });

  
// });








if($(window).width() >= 600) {
  const target = document.getElementById("target");
  
  document.addEventListener("wheel", function(e){
    // prevent the default scrolling event
    // e.preventDefault();
  
    // scroll the div
    target.scrollBy(e.deltaX, e.deltaY);
  });
}



// $('.typewriterDiv').css({
//   // 'left': $('.outer-frame-btns-top-left').outerWidth(),
//   'max-width': $('.outer-frame-btns').width() - ($('.outer-frame-btns-top-left').outerWidth()),
// });


/*** Plugin ***/

(function($) {
  // writes the string
  //
  // @param jQuery $target
  // @param String str
  // @param Numeric cursor
  // @param Numeric delay
  // @param Function cb
  // @return void
  function typeString($target, str, cursor, delay, cb) {
    $target.html(function(_, html) {
      return html + str[cursor];
    });

    if (cursor < str.length - 1) {
      setTimeout(function() {
        typeString($target, str, cursor + 1, delay, cb);
      }, delay);
    } else {
      cb();
    }
  }

  // clears the string
  //
  // @param jQuery $target
  // @param Numeric delay
  // @param Function cb
  // @return void
  function deleteString($target, delay, cb) {
    var length;

    $target.html(function(_, html) {
      length = html.length;
      return html.substr(0, length - 1);
    });

    if (length > 1) {
      setTimeout(function() {
        deleteString($target, delay, cb);
      }, delay);
    } else {
      cb();
    }
  }

  // jQuery hook
  $.fn.extend({
    teletype: function(opts) {
      var settings = $.extend({}, $.teletype.defaults, opts);

      return $(this).each(function() {
        (function loop($tar, idx) {
          // type
          typeString($tar, settings.text[idx], 0, settings.delay, function() {
            // delete
            setTimeout(function() {
              deleteString($tar, settings.delay, function() {
                loop($tar, (idx + 1) % settings.text.length);
              });
            }, settings.pause);
          });

        }($(this), 0));
      });
    }
  });

  // plugin defaults  
  $.extend({
    teletype: {
      defaults: {
        delay: 80,
        pause: 2000,
        text: []
      }
    }
  });
}(jQuery));


/*** init ***/

$('#typewriter').teletype({
  text: [
    'looking at summer 2024 design internships',
    'adding in alt texts properly',
    'finishing the play section',
    'learning python',
    'drinking bubble tea',
  ]
});

$('#cursor').teletype({
  text: ['_', ' '],
  delay: 0,
  pause: 500
});




var contentHeight = 0;

$(window).on('load', () => {
  $('.content').children().each(function( index ) {
    contentHeight += ($(this).outerHeight() + 224)
    //72 is 96/2 + 92/2/2, so 24 * 3
  // console.log('contentHeight' +contentHeight)
  
  // console.log($(this).outerHeight())
  });
  contentHeight =  contentHeight - 96
  //2 section bottom paddings + bottom padding of footer
  /////////// from before 96 is the 6rem padding on the container-container

  
  //make the line hidden in focus-ring match contentheight
  $('.focus-ring-shape').css({
    'width': contentHeight,
  });

  // Get the scrollbar width
  var scrollbarWidth = $('.content').height()/contentHeight*($('.parent').width());

  //changes the focus-ring width to fit the line
  $('.focus-ring').css({
    'width': $('.focus-ring-line').width() + scrollbarWidth 
  });
});

{/* <div class="inner-box-text">
<h4>here:after</h4>
<p>RGD tie winner for UX design!</p>
</div>
<div class="project-description">
<p>An app aimed to improve access to different genres and categories rich in journals, literature, and books to aid reading and learning, placing as runner-up for Ada’s Base ProtoJam 2022 competition.</p>
</div> */}


// $('.inner-box').mouseenter(function(){
//   $(this).children('.inner-box-text').css({
//     'height': '0',
//   })
// });

// $('.inner-box').mouseleave(function(){
//   $(this).children('.inner-box-text').css({
//     'height': '',
//   })
// });

//for going from blur to unblur

// var $horizontal = $('.focus-ring');

// var window_width = $('.container111').outerWidth()  + ($('.focus-ring').width()) ;

// var document_height = contentHeight - $(window).height();

// $('.content').scroll(function() {
//   var scrollPos = ($('.content').scrollTop() + $(window).height() + 0.03)
//   //windowheight to account for different
  

// var $horizontal = $('#horizontal');

//   if ($('.content').scrollTop() < $('#content-hero').height())  {
//     $('.parent').children().css({
//       'opacity': '100%',
//     })
//   } else {
//     $('.parent').children().css({
//       'opacity': '',
//     })
//   }

//   var filterVal = 3 - ((scrollPos ) * 3 / (contentHeight))
//   // console.log(filterVal)

//   $('.blur').css({
//     'filter'         : 'blur(' + filterVal + 'px)',
//     '-webkit-filter' : 'blur(' + filterVal + 'px)',
//     '-moz-filter'    : 'blur(' + filterVal + 'px)',
//     '-o-filter'      : 'blur(' + filterVal + 'px)',
//     '-ms-filter'     : 'blur(' + filterVal + 'px)'
//   });


//   var filterValforline = 1 - ((scrollPos  ) * 1 / (contentHeight))
//   $('.blurline').css({
//     'filter'         : 'blur(' + filterValforline + 'px)',
//     '-webkit-filter' : 'blur(' + filterValforline + 'px)',
//     '-moz-filter'    : 'blur(' + filterValforline + 'px)',
//     '-o-filter'      : 'blur(' + filterValforline + 'px)',
//     '-ms-filter'     : 'blur(' + filterValforline + 'px)'
//   });

// });





function scrollBarLeft(){
  $('.content').scroll(function () {
    $('.focus-ring').scrollLeft($(this).scrollTop());
  });
  
  $('.inner-box-container-container').scroll(function () {
    $('.focus-ring').scrollLeft($(this).scrollTop());
  });
  
  $('.focus-ring').scroll(function () {
    $('.content').scrollTop($(this).scrollLeft());
    $('.inner-box-container-container').scrollTop($(this).scrollLeft());
  });

  $('.focus-ring').scroll(function () {
    $('.inner-box-container-container').scrollTop($(this).scrollLeft());
  });
};






// cache the element
var $navBar = $('.container111');

// find original navigation bar position
var navPos = $('.container111').offset().top;

// on scroll
$('#content-hero').ready(function(e) {

  $('.content').scroll(function() {

      // get scroll position from top of the page
      var scrollPos = $(this).scrollTop();

      // check if scroll position is >= the nav position
      if (scrollPos >= navPos) {
          $navBar.addClass('fixed');
      } else {
          $navBar.removeClass('fixed');
      }

  });
});





$(function(){
  $.each(document.images, function(){
    // scrollTopLeft();
    var this_image = this;
    var src = $(this_image).attr('src') || '' ;
    
    if(!src.length > 0){
      //this_image.src = options.loading; // show loading
      var lsrc = $(this_image).attr('lsrc') || '' ;
      if(lsrc.length > 0){
          var img = new Image();
          img.src = lsrc;
          $(img).load(function() {
              this_image.src = this.src;
          });
      }
        
    }
  });
});





//makes image load before calculating the height of content-hero

for (var i = document.images.length - 1; i >= 0; i--) {
  var this_image = document.images[i];
  var src = $(this_image).attr('src') || '' ;
  if(!src.length > 0){
    var lsrc = $(this_image).attr('lsrc') || '' ;
    if(lsrc.length > 0){
      $(this_image).attr("src",lsrc);
    }
  }
  // scrollTopLeft();
  // contentHeroSize();
}



function returnToPos() {
  $('.regimg').removeClass('regimgselected');

  $('.regimg').css({
    'top': '',
    'left': '',
    'transform-origin': '',
    'position': '',
    'transform': '',
    'padding': '',
    'z-index': '',
    'width': ''
  });

  $('.container').css({
    'overflow': '',
  })
  //enable scrolling
}




// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
 $('.content').scroll(preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}













// $('.regimg').click( function() {

  
//   regimgposition = $(this).parent().position();
//   regimgwidth = $(this).parent().width();
//   bodyposition = $('body').position();


//   $(this).css({
//     'position':'fixed',
//     'top': regimgposition.top,
//     'left': regimgposition.left,
//     'width': regimgwidth
//   });

//   if ($(this).hasClass('regimgselected')) {
//     $(this).css({
//       'position':'fixed',
//       'transform': 'translate(0%, 0%)',
//       'top': regimgposition.top * 1/1.5,
//       'left': regimgposition.left,
//       'width': regimgwidth,
//     });

//     $('.regimgbackground').css({
//       'display': '',
//     })

//     setTimeout(returnToPos, 305);




//   } else {
//     $( this ).addClass( "regimgselected" );    
//     $('.regimgbackground').css({
//       'display': 'block',
//     })
//     // disableScroll();
//     $(this).css({
//       'top': regimgposition.top,
//       'left': regimgposition.left,
//       'width': regimgwidth,
//     }).promise().done(function(){
//       // alert( 'color is yellow!' );
//       $(this).css({
//         'top': '50%',
//         'left': '50%',
//         'transform-origin': 'center',
//         'position': 'fixed',
//         'transform': 'translate(-50%, -50%)',
//         'padding': '16px',
//         'z-index': '99999',
//         'width': $('.content').width()
//       });
//     });
//   }
// });


/// get reg img position
//disable scrolling in backgrosund
//change reg img position
//






$( document ).ready(function() {

  // contentHeroSize();

  scrollBarLeft();

  clickMenu();
  
  // playCardPos();

  // mobileViewUnavail();

  // navBarSize();

  outerFrameSize();

  GIFcontainerSize();

  outerFrameSize();

  innerBorderPos();  

  topBarSize();

});



window.onload = function () {

  var rippleZoomDiv = document.getElementsByClassName('ripple-zoom-area');
  var rippleZoomBorder = document.getElementsByClassName('ripple-zoom-border');
  for (var i = 0, ii = rippleZoomDiv.length; i < ii; i++) {
    // console.dir(myElements[i].style);
      var imageSrc = rippleZoomDiv[i].style.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2').split(',')[0];
      var image = new Image();
      image.src = imageSrc;
      
      var width = image.width / ($('#target').width()),
          height = image.height / width;
      rippleZoomDiv[i].style.height = height + 'px'
      // rippleZoomDiv[i].style.width = width - 32 + 'px'

      rippleZoomBorder[i].style.height = 16 + height + 'px';
      rippleZoomBorder[i].style.top = - 54 - height + 'px';
      rippleZoomBorder[i].style.marginBottom = -height + 'px';

  };
}





const rippleZoomCursor = document.querySelectorAll('.ripple-zoom-area');

const rippleZoomCursorShow = {
  rootMargin: '-30% 0% -20% 0%'
  //top right bottom left
};

const appearWhenOnScreen = new IntersectionObserver
(function(
  entries,     
  appearWhenOnScreen
  ) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {

        // entry.target.classList.add('color');
        // $target is correct, $cursorwindow is correct
        var $target = entry.target,
            $cursorWindow = $target.querySelector('.ripple-zoom-area-window');

        // var zoomFactor = 3;
        var zoomFactor = $target.dataset.zoom;

        // Copy the background image to the zoom window
        // $cursorWindow.css('background-image', $target.css('background-image'));
        $cursorWindow.style.backgroundImage = $target.style.backgroundImage
        $cursorWindow.style.backgroundRepeat= $target.style.backgroundRepeat
        //both of these work


        
        // console.log(targetPos)
        $target.onmousemove = (e) => {
          var targetPos = $target.getBoundingClientRect();
          

          var cursX = e.pageX - $target.offsetLeft;
          // var cursY = Math.trunc((e.pageY + targetPos.top));
          var cursY = Math.trunc((e.clientY - targetPos.top));

          // targetPos.top is calculating how far the div is from the top of the page
          // e.pageY is how far the mouse is from the top of window????
          // e.clientY is  how far mouse is from top of browser window


          var imgX, imgY, imgW, imgH;
          

          if (0 <= cursX && cursX <= $target.offsetWidth && 0 <= cursY && cursY <= $target.offsetHeight) {
            // $target.style.backgroundColor = '#ccc';
            // $cursorWindow.style.position = 'absolute';
            $cursorWindow.style.display = 'block';
            // this is working
            

            $cursorWindow.style.left = cursX - $cursorWindow.offsetWidth / 2 + 'px';
            $cursorWindow.style.top = cursY - $cursorWindow.offsetHeight / 2 + 'px';
            // left/top is being changed


            imgX = -(cursX * zoomFactor) + $cursorWindow.clientWidth / 2;
            imgY = -(cursY * zoomFactor) + $cursorWindow.clientHeight / 2;



            imgW = $target.clientWidth * zoomFactor;
            imgH = $target.clientHeight * zoomFactor;

            // Change the position and size of the image in the zoom window
            // to show a magnified view of the image content under the cursor
            $cursorWindow.style.backgroundPosition = imgX + 'px ' + imgY + 'px';
            
            // changing the size of the image in the window
            $cursorWindow.style.backgroundSize =  imgW + 'px ' + imgH + 'px';


          } else {
              $cursorWindow.style.display = 'none';
              $target.style.backgroundColor = '';

          }


        };

        // appearWhenOnScreen.unobserve(rippleZoomCursor);
      } else {
        entry.target.style.backgroundColor = '';
        // $cursorWindow.style.backgroundImage = ''
        // $cursorWindow.style.backgroundRepeat= ''
        // $cursorWindow.style.display = 'none';
        // $target.style.backgroundColor = '';
      }
    })
  }, rippleZoomCursorShow);

  rippleZoomCursor.forEach(rippleZoomCursor =>{
  appearWhenOnScreen.observe(rippleZoomCursor);
});



$('.ripple-zoom-area').hover(function(){
  $('.follower-center, .follower-around').toggleClass('zoom');
});

$('.ripple-zoom-area-window').mouseleave(function(){
  $(this).css({
    'display': ''
  });
})