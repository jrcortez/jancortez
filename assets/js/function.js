// $(window).scroll(function(){

// 	var wScroll = $(this).scrollTop();


// 	if(wScroll > $('my-skills').offset().top){

// 		$('.parallax-skills').css({

// 			'transform' : 'translate(0px, '+ (953 - wScroll) /9  +'px)'

// 		});
// 	}

// })



//slider
   $('.pwhoto').hover(function(){

   		$(this).find('.photo-caption')
   		.stop()
   		.show()
   		.animate({bottom: '0'},{ duration: 1600, easing : 'easeOutQuart'});

   }, function(){

   		$(this)
   		.find('.photo-caption')
   		.stop()
   		.animate({bottom : '-70px'}, {duration: 1600, easing : 'easeOutQuart'});

   });


//Smooth scrolling
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 6000);
        return false;
      }
    }
  });
});