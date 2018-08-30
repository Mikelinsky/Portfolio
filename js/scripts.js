window.onload = function() {
	//scroll function
	jQuery(function watchScroll() {
		$(window).scroll(function() {
			var positionOfScroll = $(window).scrollTop();
			console.log(positionOfScroll);
			
			if (positionOfScroll >= 450) {
				console.log('change navbar');
				//change resp navbar
				$('.responsive-navbar').css('background-color', 'rgba(16, 31, 85, 0.49)');
				//change navbar
				function changeNavbar() {
					$('.navbar-container').css('top', '5.5rem');
					$('.big-logo').addClass('hidden');
					$('.small-logo').addClass('visible');
					$('.logo-container').css('min-width', '7rem');
					$('nav').css('height', '1.2rem');
					$('.nav-elem').css('height', '1.2rem');
					$('.navbar-li').css('line-height', '1rem');
				};
				changeNavbar();
				//change btn up
				$('#btnCircleUp-js').css('display', 'block');
			} else {
				console.log('reverse change');
				//reverse change resp navbar
				$('.responsive-navbar').removeAttr('style');
				//reverse change navbar 
				function reverseChangeNavbar() {
					$('.navbar-container').removeAttr('style');
					$('.small-logo').removeClass('visible');
					$('.big-logo').removeClass('hidden');
					$('.logo-container').removeAttr('style');
					$('nav').removeAttr('style');
					$('.nav-elem').removeAttr('style');
					$('.navbar-li').removeAttr('style'); 
				};
				reverseChangeNavbar();
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
	//hamburger menu
	jQuery(function showMenu() {
		/* open menu */
		$('.hamburger').click(function() {
			$('.hamburger-menu').show(700);
			$('.hamburger').hide();
			$('.hamburger-close').show();
			$('.responsive-navbar').css('background-color', 'rgba(16, 31, 85, 0.49)');
		});
		/* close menu */
		$('.hamburger-close').click(function() {
			$('.hamburger-menu').hide(700);
			$('.hamburger').show();
			$('.hamburger-close').hide();
			$('.responsive-navbar').removeAttr('style');
		});
	});
	jQuery(function selectAndClose() {
		$('.hamburger-menu-link').click(function() {
			$('.hamburger-menu').hide(700);
			$('.hamburger').show();
			$('.hamburger-close').hide();
			$('.responsive-navbar').removeAttr('style');
		});
	});
};