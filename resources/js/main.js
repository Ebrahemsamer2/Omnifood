$(document).ready(function() {

/* --------------- Adding sticky navigation -------------- */
	$('.js-features').waypoint(function(direction) {

		if(direction == 'down'){
			$('nav').addClass('sticky');
		}else {
			$('nav').removeClass('sticky');
		}

	}, {
		offset: "60px ;"
	});

/* -------------- Scrolling Effects ----------------- */

	// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      	&& 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


/* --------------------- Animation on scrolling ---------------- */

	$('.js-features .row div').waypoint(function(direction) {
		$('.js-features .row div').addClass('animated fadeIn');
	},{
		offset: "50%;"
	});

	$('.steps .row .col').waypoint(function(direction) {
		$('.steps .row .col img').addClass('animated fadeInUp');
	},{
		offset: "50%;"
	});

	$('.cities .row .col').waypoint(function(direction) {
		$('.cities .row .col').addClass('animated fadeIn');
	},{
		offset: "50%;"
	});

	$('.plans .row .col:first-of-type').waypoint(function(direction) {
		$('.plans .row .col:first-of-type').addClass('animated pulse');
	},{
		offset: "50%;"
	});



	// Sticky Navigation Icons

	$('.ion-md-menu').click(function() {
		$('header .row ul').slideToggle(300);
		var icon = $('.mobile-nav-icon i');
		if( icon.hasClass('ion-md-close-circle')) {
			icon.removeClass('ion-md-close-circle');
			icon.addClass('ion-md-menu');
		}else {
			icon.addClass('ion-md-close-circle');
			icon.removeClass('ion-md-menu');
		}
	});
});

/* Adding Map */
var map = new GMaps({
  div: '.map',
  lat: 31.0334848,
  lng: 30.4377182,
  zoom:12
});

map.addMarker({
  lat: 31.0334848,
  lng: 30.4377182,
  title: 'Damanhour',
  click: function(e) {
    alert('You clicked in this marker');
  }
});