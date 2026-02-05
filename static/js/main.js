(function($){
	$(document).ready(function(){
		// Interests page click event
		$('.interest-header').on('click', function() {
		  var item = $(this).closest('.interest-item');
		  item.toggleClass('active');
		  item.find('.interest-body').slideToggle();
		});

		// Back to top button click event
		$('.js-back-to-top').on('click', function(e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: 0 }, 500);
		});
	});
})(jQuery);
