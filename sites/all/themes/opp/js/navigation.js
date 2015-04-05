/* --- Reset the DOM --- */
function resetDOM() {
	$('html').click(function() {
		$('li.expanded').removeClass('active');
	});
}

// Config
var stickyZone = '#zone-header-bottom-wrapper';
var stickyNavOffset = 10;
//--//
var maxBreakpoint = 1023; 					// maximum breakpoint
var minBreakpoint = maxBreakpoint + 1; 		// minimum breakpoint
var targetID = 'region-menu'; 				// target ID (must be present in DOM)
var triggerID = 'toggle-nav'; 				// trigger/button ID (will be created into targetID)

/* --- Sticky nav --- */
function stickyNav() {
	// get offset
	var stickyNavTop = $(stickyZone).offset().top - stickyNavOffset;
	// add/remove sticky class on nav
	var sticky = function() {
		var scrollTop = $(window).scrollTop();
		if (scrollTop > stickyNavTop) {
			$(stickyZone).addClass('is-sticky');
		}
		else {
			$(stickyZone).removeClass('is-sticky');
		}
	};
	// call sticky on scroll
	$(window).scroll(function() { sticky(); });
}

/* --- Dropdown nav --- */
function dropDownNav() {
	/*$('#region-menu li.expanded > a').click(function(e) {
		e.stopPropagation(); // WARNING ABOUT STOP PROPAGATION
		e.preventDefault();
		$('li.expanded').removeClass('active');
		$(this).parent('li.expanded').toggleClass('active');
	});*/
	$('#region-menu li.expanded').hover(
		// mouseenter
		function() {
			$('li.expanded').addClass('active');
		},
		// mouseleave
		function() {
			$(this).removeClass('active');
		}
	);
}

/* --- Mobile nav --- */
function mobileNav() {
	// targeting navigation
	var n = document.getElementById(targetID);
	// when small screen, create a switch button, and toggle navigation class
	if (window.matchMedia("(max-width:" + maxBreakpoint +"px)").matches && document.getElementById(triggerID) == undefined) {
		// nav initially closed
		n.classList.add('is-closed');
		n.insertAdjacentHTML('afterBegin','<button class="lines-button x" id='+triggerID+' title="open/close navigation"><span class="lines"></span></button>');
		t = document.getElementById(triggerID); 
		t.onclick = function() { 
			n.classList.toggle('is-closed');
			$('#toggle-nav').toggleClass('close');
		}
	}
	// when big screen, delete switch button, and toggle navigation class
	if (window.matchMedia("(min-width: " + minBreakpoint +"px)").matches && document.getElementById(triggerID)) {
		n.classList.remove('is-closed');
		document.getElementById(triggerID).outerHTML = "";
	}
}

/* Functions call */
$(document).ready(function() {

	resetDOM();
	
	/* Navigation */
	stickyNav();
	dropDownNav();
	mobileNav();
	// when resize or orientation change, reload function
	window.addEventListener('resize', mobileNav);
	
});
