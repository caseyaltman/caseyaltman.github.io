jQuery(document).ready(function() {
	
	/* responsive menu toggle */

	$('.nav_toggle').click(function(){
		$('.menu4 > ul').slideToggle(200);
		return false;
	});

	/* single page nav */

	$('nav.menu4').singlePageNav({
		'offset' : $('#navigation').outerHeight(),
		'speed' : 500,
		'currentClass' : 'active',
		'filter' : ':not(.external)'
	});

	/* sticky nav */

	navPosition = $('#navigation').offset().top;
	$(window).scroll(function(){
		scrollPosition = $(window).scrollTop();
		if ( scrollPosition > navPosition ) {
			$('#navigation').addClass('sticky');
		} else {
			$('#navigation').removeClass('sticky');
		}
	});

});