window.onload = function() {
	//navbar
	jQuery(function changeNavbar() {
		$(window).scroll(function() {
			var positionOfScroll = $(window).scrollTop();
			
			console.log(positionOfScroll);
			
			if (positionOfScroll >= 500) {
				//change navbar
				console.log('change navbar');
				$('.small-logo').addClass('visible');
				$('.big-logo').addClass('hidden');
				$('.logo-container').css('min-width', '7rem');
				$('nav').css('height', '1.2rem');
				$('.nav-elem').css('height', '1.2rem');
			} else {
				//reverse change
				console.log('reverse change');
				$('.big-logo').removeClass('hidden');
				$('.small-logo').removeClass('visible');
				$('.logo-container').removeAttr('style');
				$('nav').removeAttr('style');
				$('.nav-elem').removeAttr('style');
			}
		});
	});
};