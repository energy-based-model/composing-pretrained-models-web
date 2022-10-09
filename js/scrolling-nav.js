//const canvas = document.getElementById("bgim");
//const context = canvas.getContext("2d");


const preloadImages = () => {
  for (let i = 80; i < 200; i+=5) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};
const updateImage = imgname => {
  img.src = imgname;
    console.log(canvas.height, canvas.width);
    var sw = canvas.scrollWidth; 
    var sh = canvas.scrollHeight; 
    var cw = canvas.width; 
    var ch = canvas.height; 
    var hRatio = canvas.scrollWidth / img.width    ;
    var vRatio = canvas.scrollHeight / img.height  ;
    console.log(canvas.scrollHeight, ch);
    var ratio  = Math.min ( hRatio, vRatio );
    context.drawImage(img, 0, 0, img.width/ratio,    img.height/ratio,     // source rectangle
		0, 0, cw, ch); // destination rectangle
}

const img = new Image()
//img.src = currentFrame(80);
//canvas.width=2048;
//canvas.height=1024;

(function($) {
  "use strict"; // Start of use strict

  // preloadImages();
  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });




})(jQuery); // End of use strict

function currentFrame(index){
    var num = "000000000" + index;
    num = num.substr(num.length - 4);
    var image_name = 'images/4/Action_' + num + '_0_normal.jpg';
    return image_name;
}

  /**
 * Listen to scroll to change header opacity class
 */
  function checkScroll(){
      //var startY = $('.headercontainer').height()*2; //The point where the navbar changes in px
      var startY = 0;
      //console.log($(window).scrollTop());
      var scroll_num = $(window).scrollTop();
      
      var numb = Math.floor(scroll_num/30)*5 + 100;
      if (numb < 209){
	  var image_name = currentFrame(numb);
      }
      // requestAnimationFrame(() => updateImage(image_name))
      
      $('.navbar').addClass("scrolled");
      $('.navbar-brand').show()
      if($(window).scrollTop() >= startY){
      }else{
          $('.navbar').removeClass("scrolled");
          
          $('.navbar-brand').hide()
      }
  }

  if($('.navbar').length > 0){
      $(window).on("scroll load resize", function(){
          checkScroll();
      });
  }

function selectAction(id){
    var images = ['coffee.png', 'gosleep.png', 'groceries.png', 'watch_movie.png'];
    var descriptions = [];
    descriptions.push('Open coffee maker. Put filter in main basket, put ground coffee in filter, fill reservoir with water, turn on coffee maker.');
    descriptions.push('I change to my pyjamas. I get into bed. I set the alarm clock for the next morning. Then I turn off the light and sleep.');
    descriptions.push('I walk into the kitchen and put the groceries on the counter. Then I open the fridge and put the groceries in the fridge.');
    descriptions.push('Turn on tv. Turn on dvd player. Insert dvd into player. Start movie. Sit on the couch and watch movie.');
    var titles = ['Prepare coffee', 'Go sleep', 'Put grocieries in fridge', 'Watch a movie'];
    $('#titleprogram').text(titles[id]);
    $('#description').text(descriptions[id]);
    $('.programimg').attr('src', 'images/programs/'+images[id])
        
}
