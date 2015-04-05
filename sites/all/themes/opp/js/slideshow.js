// Config

/* --- Responsive slideshow --- */
function responsiveSlideshow() {
	$(window).resize(function() { 
		$('.views_slideshow_cycle_main').each(function() {
			var img_height;
			$(this).find('.views-slideshow-cycle-main-frame-row').each(function() {
				var tmp_img_height = $(this).height();
				if (tmp_img_height !== 0) {
					img_height = tmp_img_height;
				}
				return;
			});
			if (img_height !== 0) {
				$(this).height(img_height).children('.views-slideshow-cycle-main-frame').height(img_height);
			}
			return;
		});
	});
}

/* Functions call */
$(document).ready(function() {
	
	/* Slideshow (homepage + super contributors) */
	responsiveSlideshow();
	
});
