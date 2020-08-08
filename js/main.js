AOS.init({
	duration: 800,
	easing: "slide"
});

(function($) {

	"use strict";

	$(window).stellar ({
		horizontalScrolling: false,
    	/*responsive: true,*/
    	parallaxBackgrounds: true,
    	parallaxElements: true,
    	hideDistantElements: false,
    	scrollProperty: 'scroll'
    });

	var fullHeight = function() {
		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function() {
			$('.js-fullheight').css('height', $(window).height());
		});
	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();

   // Open the menu on click
   var burgerMenu = function() {

		$('.js-site-nav-toggle').on('click', function(event) {
			event.preventDefault();
			var $this = $(this);

			if ($('body').hasClass('offcanvas')) {
				$this.removeClass('active');
				$('body').removeClass('offcanvas');	
			} else {
				$this.addClass('active');
				$('body').addClass('offcanvas');	
			}
		});
	};
	burgerMenu();

	// Click outside of offcanvas
	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#site-aside, .js-site-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-site-nav-toggle').removeClass('active');
			
	    	}
	    	
	    }
		});

		$(window).scroll(function(){
			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-site-nav-toggle').removeClass('active');
			
	    	}
		});

	};
	mobileMenuOutsideClick();

	var dropDown = function () {

		$('.dropbtn').on('click', function(event) {
			event.preventDefault();
			var $this = $(this);

			if ($('.dropdown-content').hasClass('show')) {
				$this.removeClass('show');
				$('.dropdown-content').removeClass('show');	
			} else {
				$this.addClass('show');
				$('.dropdown-content').addClass('show');	
			}
		});
	}
	dropDown();

	// fade in/out animation
	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	/* artefact for magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  }); */

  /* artefact for video player
  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  }); */


  	// load the sidebar
  	$(function() {
      	$("#sidebar").load("js/fxdxdy1.html"); 
    });

  	// load three random popular articles
  	$(function() {
      	$("#popart").load("js/fxdxdy3.html");
      	var elems = $(".randomize");
		if (elems.length) {
  			var keep1 = Math.floor(Math.random() * elems.length);
  			var keep2 = Math.floor(Math.random() * elems.length);
  			var keep3 = Math.floor(Math.random() * elems.length);
  			for (var i = 0; i < elems.length; ++i) {
    			if (i !== keep1 && i !== keep2 && i !== keep3) {
      				$(elems[i]).hide();
 		   		}
  			}
		}
    });

  // load the footer
  $(function() {
      	$("#footer").load("js/fxdxdy2.html"); 
    });


})(jQuery);

// display progress towards end of article
function scrollProgress() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progress").style.width = scrolled + "%";
} 
window.onscroll = function() {
	scrollProgress()
};

// search for an article
function search_article() { 
	let input = document.getElementById('searchbar').value 
	input=input.toLowerCase(); 
	let x = document.getElementsByClassName('searchable'); 
	
	for (i = 0; i < x.length; i++) { 
		if (!x[i].innerHTML.toLowerCase().includes(input)) { 
			x[i].style.display="none"; 
		} 
		else { 
			x[i].style.display="inline-block";				 
		}
		if (input == "") {
			x[i].style.display="none";
		}
	}

	let y = document.getElementsByClassName('search-head');
	for (i = 0; i < y.length; i++) {
		y.style.display="inline-block !important";
	}
} 
