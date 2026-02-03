(function($){
	$(document).ready(function(){
		// Interests page click event
		$('.interest-header').on('click', function() {
		  var item = $(this).closest('.interest-item');
		  item.toggleClass('active');
		  item.find('.interest-body').slideToggle();
		});
	});
})(jQuery);