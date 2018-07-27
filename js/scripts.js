window.onload = function() {
	//scroll function
	jQuery(function watchScroll() {
		$(window).scroll(function() {
			var positionOfScroll = $(window).scrollTop();
			console.log(positionOfScroll);
			
			if (positionOfScroll >= 450) {
				//change navbar
				console.log('change navbar');
				$('.navbar-container').css('top', '5.5rem');
				$('.big-logo').addClass('hidden');
				$('.small-logo').addClass('visible');
				$('.logo-container').css('min-width', '7rem');
				$('nav').css('height', '1.2rem');
				$('.nav-elem').css('height', '1.2rem');
				$('.hamburger-li').css('line-height', '1rem');
				//change btn up
				$('#btnCircleUp-js').css('display', 'block');
			} else {
				//reverse change navbar 
				console.log('reverse change');
				$('.navbar-container').removeAttr('style');
				$('.small-logo').removeClass('visible');
				$('.big-logo').removeClass('hidden');
				$('.logo-container').removeAttr('style');
				$('nav').removeAttr('style');
				$('.nav-elem').removeAttr('style');
				$('.hamburger-li').removeAttr('style'); 
				//reverse change btn up
				$('#btnCircleUp-js').removeAttr('style');
			}
		});
	});
	// button UP
	jQuery(function scrollUp() {
		$('#btnCircleUp-js').on( "click", function(event) {
			event.preventDefault();
			$('html, body').animate({scrollTop: 0}, 800);
		  });
	});
	//hamburger
	jQuery(function showMenu() {
		$('.hamburger').click(function() {
			$('.hamburger-menu').show(700);
			$('.hamburger').hide();
			$('.hamburger-close').show();
		});
		$('.hamburger-close').click(function() {
			$('.hamburger-menu').hide(700);
			$('.hamburger').show();
			$('.hamburger-close').hide();
		});
	});
};