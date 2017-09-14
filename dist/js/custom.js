$(function() {

	var sliderH = $("#js--top-slider").height();
	
    $(document).on("scroll", function(){

    	var documentScroll = $(this).scrollTop();

    	if(documentScroll > sliderH){
    		$("#js--header").addClass("header--fixed");
    	} else{
    		$("#js--header").removeClass("header--fixed");
    	}
    });

    $("#js--nav").on("click","a", function (e) {
        e.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });


    $("#js--responsive-btn").on("click", function(){

        $("#js--nav__list").slideToggle();

    });


    $("#js--arrow-down").on("click", function(){
        
        var aboutOffset = $("#js--about").offset().top;

        $("html, body").animate({
            scrollTop: aboutOffset
        }, 400);
    });
});
