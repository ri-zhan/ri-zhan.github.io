// custom curso
$(document).mousemove(function(e){
  $(".cursor-around").css({left: e.pageX, top:e.pageY});
});

$(document).mousemove(function(e){
  $(".cursor-center").css({left: e.pageX, top:e.pageY});
});


$('.header-text-left.back').click(function() {
            window.history.back();
        });

// ripple zoom for images

$('.ripple-zoom-area').hover(function(){
  $('.cursor-center, .cursor-around').toggleClass('zoom');
});

$('.ripple-zoom-area-window').mouseleave(function(){
  $(this).css({
    'display': '',
    'height': '',
    'width': ''
  });
})

// riiple zoom getting all the images that need the function

window.onload = function () {

  var rippleZoomDiv = document.getElementsByClassName('ripple-zoom-area');
  for (var i = 0, ii = rippleZoomDiv.length; i < ii; i++) {
    // console.dir(myElements[i].style);
      var imageSrc = rippleZoomDiv[i].style.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2').split(',')[0];
      var image = new Image();

      image.src = imageSrc;
      
      // creates height base on window size and image size since the div itself doesn't have a size
      var width = image.width / rippleZoomDiv[i].parentNode.offsetWidth,
      height = image.height / width;
      rippleZoomDiv[i].style.height = height + 'px'

  };
}

// detecting when to ripple zoom

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
        

        $target.onmousemove = (e) => {
          var targetPos = $target.getBoundingClientRect();
          

          var cursX = e.pageX - targetPos.left;
          // var cursY = Math.trunc((e.pageY + targetPos.top));
          var cursY = Math.trunc((e.clientY - targetPos.top));

          // targetPos.top is calculating how far the div is from the top of the page
          // e.pageY is how far the mouse is from the top of window????
          // e.clientY is how far mouse is from top of browser window


          var imgX, imgY, imgW, imgH;
          

          if (0 <= cursX && cursX <= $target.offsetWidth && 0 <= cursY && cursY <= $target.offsetHeight) {

            $cursorWindow.style.display = 'block';
            

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
      }
    })
  }, rippleZoomCursorShow);

  rippleZoomCursor.forEach(rippleZoomCursor =>{
  appearWhenOnScreen.observe(rippleZoomCursor);
});

$('a, .header-text-left').hover(function(){
  $('.cursor-center, .cursor-around').toggleClass('hover')
});



// /////////////// 

// const sideBarprep = document.querySelectorAll('.child-section');

// const opacityChangeprep = {
//   rootMargin: '-40% 0% -60% 0%'
//   //top right bottom left
// };

// const appearWhenInCenterprep = new IntersectionObserver
// (function(
//   entries,     
//   appearWhenInCenterprep
//   ) {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {

//         if($(window).width() >= 600) {
//           const sideBar = document.querySelectorAll('.child-section');

//           const opacityChange = {
//             rootMargin: '-30% 0% -50% 0%'
//           };
          
//           const appearWhenInCenter = new IntersectionObserver
//           (function(
//             entries,     
//             appearWhenInCenter
//             ) {
//               entries.forEach(entry => {
//                 if (entry.isIntersecting) {
          
//                   if($(window).width() >= 600) {

//                       entry.target.classList.add('.selected');

//                       // entry.target.IDList.replace("link", "")
//                       // console.log( entry.target.classList)
//                       // console.log(entry.target.id + 'link')
//                       thisDiv = '#' +entry.target.id + 'link'
//                       // console.log(jQuery(this))
          
//                       // jQuery(this).attr('id', newID);
//                       jQuery(thisDiv).addClass('selected');
//                       // jQuery(thisDiv).removeClass('selected');
          
//                       // jQuery(thisDiv).addClass('deselected');
//                       jQuery(thisDiv).removeClass('deselected');
//                   }
                  
                 
          
//                   // appearWhenCenter.unobserve(entry, target);
//                 } else {
//                   if($(window).width() >= 600) {
          
//                       entry.target.classList.remove('.selected');
//                                 // console.log( entry.target.classList)
//                       // console.log(entry.target.id + 'link')
//                       thisDiv = '#' +entry.target.id + 'link'
//                       // console.log(jQuery(this))
          
//                       // jQuery(this).attr('id', newID);
//                       jQuery(thisDiv).removeClass('selected');
//                       // jQuery(thisDiv).addClass('selected');
          
//                       // jQuery(thisDiv).removeClass('deselected');
//                       jQuery(thisDiv).addClass('deselected');
          
//                   }
//                 }
//               })
//             }, opacityChange);
          
//             sideBar.forEach(sideBar =>{
//             appearWhenInCenter.observe(sideBar);
//             });

//         }
//         // appearWhenCenter.unobserve(entry, target);
//       } else {
//         if($(window).width() >= 600) {
//           $('.section-nav').addClass('selected');
          
//         }
//       }
//     })
//   }, opacityChangeprep);

//   sideBarprep.forEach(sideBarprep =>{
//   appearWhenInCenterprep.observe(sideBarprep);
// });

