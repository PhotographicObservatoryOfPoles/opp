$(document).ready(function() {
	$(".field-name-chapter-nav").hide();
	eventClick();
	navChapitre();
});




/** MENU EXPEDITIONS **/
function eventClick(){
	$(".field-name-voir-plus").click(menuExpedition);

	$(".field-name-chapter-nav ul li a").click(function(){
			$('.field-name-chapter-nav').slideUp('slow');
	    	$(".field-name-chapter-nav").removeClass("active");
		});
}

function menuExpedition(){
	  	$classes=$(".field-name-chapter-nav").attr('class');
	  	$isActive=$classes.search("active");


		if($isActive==-1){
	        $('.field-name-chapter-nav').slideDown('slow');
	        $(".field-name-chapter-nav").addClass("active");
	    }
	    else{
			$('.field-name-chapter-nav').slideUp('slow');
	    	$(".field-name-chapter-nav").removeClass("active");
	    }
	    return false;
}


/** NAVIGATION CHAPITRES **/
function navChapitre(){
	// find the previous and the next url for the arrows

	var urlPrev;
	var urlNext;


	/** NAVIGATION EXPEDITIOND **/
	$('head link').each(function(){
	    if($(this).attr('rel') == 'prev'){
	        urlPrev = "http://"+window.location.hostname+$(this).attr('href');
	    }
	    else if($(this).attr('rel') == 'next'){
	    	urlNext = "http://"+window.location.hostname+$(this).attr('href');
	    }
   
  	})

	// create html divs
	var prevLink = '<div class="arrow-div"><a href="'+urlPrev+'" class="arrow-prev"><</a></div>';
	var link = '<div class="arrow-div"><a href="'+urlPrev+'" class="arrow-prev"><</a><a href="'+urlNext+'" class="arrow-next">></a></div>';
	


	// add the arrow divs in the chapters and slides
	if (urlNext==undefined)
		$('body.node-type-chapter-slide div.node-chapter-slide').append(prevLink);
	else
  		$('body.node-type-chapter-slide div.node-chapter-slide').append(link);

}


