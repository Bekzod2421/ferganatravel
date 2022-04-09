window.log = function(param){
    console.log(param);
};

$(function(){

	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
		isApple = /iPod|iPad|iPhone/i.test(navigator.userAgent),
		$doc = $(document),
		$win = $(window),
		$html = $(document.documentElement);

	$('table').wrap('<div class="table-wrapper"></div>');

	resizeController(1260, function() {
		log("Функция будет вызвана меньше чем 1260");
	}, function() {
		log("Функция будет вызвана больше чем 1260");
	});

	/*alignElements*/
	function blocksMatchHeight(arr) {
		for (var i = 0; i< arr.length; i++) {
			$(arr[i]).matchHeight();
		}
	}
	var alignElemets = function(){
		blocksMatchHeight([
			'.test'
		]);	
	}
	alignElemets();
	/*alignElements*/

	/*orientationChange*/
	window.addEventListener("orientationchange", function() {
		setTimeout(alignElemets, 500);
		log("orientationChange");
	}, false);
	/*orientationChange*/


	// Esc button
    $doc.on('keyup', function(keyUp){
	    if (keyUp.keyCode 
	    	== 27) {

	    	$('.block').removeClass('active');
	      	$html.removeClass('overflowHidden');
	    	
	        return false;
	    };
	});
	// Esc button

	// Document click begin
	$doc.on('click', function(event){
        if ( $(event.target).closest('.wrapper, .ui-datepicker, .ui-datepicker a, .ui-corner-all').length ){}else {
        	$('.block').removeClass('active');
	      	$html.removeClass('overflowHidden');
        };
    });
    // Document click end


    $('.top-slider').owlCarousel({
    	items:1,
    	nav:true,
    	animateOut: 'fadeOut',
    	autoplay: true,
    	loop:true,
    	navText : ['<img src="img/slarr.svg">','<img src="img/slarr.svg">'],
    });
    $('.fbl-slider').owlCarousel({
    	items:1,
    	nav:true,
    	navText : ['<img src="img/poparr.svg">','<img src="img/poparr-r.svg">'],
    });
    $('.tour-catalog__list').owlCarousel({
    	items:4,
    	margin:20,
    	nav:true,
    	navText : ['<img src="img/poparr.svg">','<img src="img/poparr-r.svg">'],
    	responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                425: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 2,
                },
                1024: {
                    items: 4,
                }
            },
    });

    var limit = $(window).height() / 3,
        $backToTop = $('.up');

    $(window).scroll(function() {
        if ($(this).scrollTop() > limit) {
            $backToTop.fadeIn();
        } else {
            $backToTop.fadeOut();
        }
    });

    $(function() {  
	  $('.effect, .callback a')
	    .on('mouseenter', function(e) {
				var parentOffset = $(this).offset(),
	      		relX = e.pageX - parentOffset.left,
	      		relY = e.pageY - parentOffset.top;
				$(this).find('span').css({top:relY, left:relX})
	    })
	    .on('mouseout', function(e) {
				var parentOffset = $(this).offset(),
	      		relX = e.pageX - parentOffset.left,
	      		relY = e.pageY - parentOffset.top;
	    	$(this).find('span').css({top:relY, left:relX})
	    });
	});

    // scroll body to 0px on click
    $backToTop.click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 1500);
        return false;
    });

    $('.burger, .overlay').click(function(){
	  $('.burger').toggleClass('clicked');
	  $('.overlay').toggleClass('show');
	  $('.tmenu').toggleClass('show');
	  $('body').toggleClass('overflow');
	});

	var mql = window.matchMedia('all and (max-width: 1023px)');if(mql.matches){
		$('.info-bottom__right').appendTo('.map-adapt');
		$('.contacts-bottom__phone, .contacts-bottom__wtime').wrapAll('<div class="cbadapt"></div>');
		$('.contacts-bottom__mail, .contacts-bottom__address').wrapAll('<div class="cbadapt"></div>');
		$('.other-tours__list').addClass('owl-carousel').owlCarousel({
	    	items:1,
	    	nav:true,
	    	navText : ['<img src="img/poparr.svg">','<img src="img/poparr-r.svg">'],
    	});
    	$('.news-block__list').addClass('owl-carousel').owlCarousel({
	    	items:2,
	    	margin:20,
	    	nav:true,
	    	navText : ['<img src="img/poparr.svg">','<img src="img/poparr-r.svg">'],
	    	responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                425: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 2,
                },
                1024: {
                    items: 4,
                }
            },
    	});
    	$('.reviews__list').addClass('owl-carousel').owlCarousel({
	    	items:1,
	    	nav:true,
	    	navText : ['<img src="img/poparr.svg">','<img src="img/poparr-r.svg">'],
    	});
	}

	var qls = window.matchMedia('all and (max-width: 712px)');if(qls.matches){
	        var pdiv = $('.site-header__bottom .callback');
	        pdiv.insertBefore(pdiv.prev());
	        var pdiv = $('.site-header__bottom .phones');
	        pdiv.insertAfter(pdiv.next());
	        $('.reviews__title a').appendTo('.leavereviewadapt');
	}

	var sls = window.matchMedia('all and (max-width: 480px)');if(sls.matches){
	        var pdiv = $('.site-header__bottom .phones');
	        pdiv.insertBefore(pdiv.prev());
	        var pdiv = $('.site-header__bottom .callback');
	        pdiv.insertAfter(pdiv.next());
	        $('.reviews__title a').appendTo('.leavereviewadapt');
	}

	$(function() {
	$('.nbl-item').matchHeight();
	$('.rl-block').matchHeight();
	$('.tour-catalog__list .owl-item').matchHeight();
	});

    (function($) { // Begin jQuery
	  $(function() { // DOM ready
	    // If a link has a dropdown, add sub menu toggle.
	    $('nav ul li a:not(:only-child)').click(function(e) {
	      $(this).toggleClass('selector');
	      $(this).siblings('.nav-dropdown').toggle();
	      // Close one dropdown when selecting another
	      $('.nav-dropdown').not($(this).siblings()).hide();
	      e.stopPropagation();
	    });
	    // Clicking away from dropdown will remove the dropdown class
	    $('html').click(function() {
	      $('.nav-dropdown').hide();
	    });
	    // Toggle open and close nav styles on click
	    $('#nav-toggle').click(function() {
	      $('nav ul').slideToggle();
	    });
	    // Hamburger to X toggle
	    $('#nav-toggle').on('click', function() {
	      this.classList.toggle('active');
	    });
	  }); // end DOM ready
	})(jQuery); // end jQuery
});
