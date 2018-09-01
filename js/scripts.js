window.onload = function () {


	//scroll function
	function changeElements() {
		let positionOfScroll = window.pageYOffset;
		console.log(positionOfScroll);

		if (positionOfScroll >= 450) {
			console.log('change navbar');
			//change resp navbar
			function changeRespNavbar() {
				$('.responsive-navbar').css('background-color', 'rgba(16, 31, 85, 0.49)');
			};
			changeRespNavbar();
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
			function reverseChangeRespNavbar() {
				$('.responsive-navbar').removeAttr('style');
			}
			reverseChangeRespNavbar();
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
	};

	// scroll event
	jQuery(function watchScroll() {
		window.addEventListener('scroll', changeElements); 
	});

	// button UP
	jQuery(function scrollUp() {
		$('#btnCircleUp-js').on("click", function (event) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: 0
			}, 800);
		});
	});

	// close menu when select link
	jQuery(function selectAndClose() {
		$('.hamburger-menu-link').click(function () {
			$('.hamburger-menu').hide(700);
			$('.hamburger').show();
			$('.hamburger-close').hide();
			console.log('select');
		});
	});

	//hamburger menu
	jQuery(function showMenu() {
		/* open menu */
		$('.hamburger').click(function () {
			$('.hamburger-menu').show(700);
			$('.hamburger').hide();
			$('.hamburger-close').show();
			$('.responsive-navbar').css('background-color', 'rgba(16, 31, 85, 0.49)');
			console.log('open click');
		});
		/* close menu */
		$('.hamburger-close').click(function () {
			$('.hamburger-menu').hide(700);
			$('.hamburger').show();
			$('.hamburger-close').hide();
			changeElements();
			console.log('close click');
		});
	});
	
	// smooth scrool
	function smoothScroll() {
		document.querySelectorAll('a[href^="#"]').forEach(function anchor(anchor) {
			anchor.addEventListener('click', function (event) {
				event.preventDefault();

				document.querySelector(this.getAttribute('href')).scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
			});
		});
	};
	smoothScroll();
};