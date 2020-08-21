$(document).ready(function() {

    "use strict";

    //Global Variables
    var header = $(".header"),
        skillbar = $(".skillbar"),
        scrollUp = $(".scroll-up"),
        sections = $(".sections"),
        navList = $("ul.myNav"),
        navItem = $("ul.myNav li a"),
        hamburger = $(".hamburger");


    // Pre Loader Script
    $(window).on("load", function() {
        $('.loader-con').fadeOut('slow');
    });


    // Mobile Navigation
    hamburger.click(function() {
        hamburger.toggleClass("ham-active");
        navList.toggleClass("m-nav-active");
    });

    // Close Mobile Navigation when a link is clicked
    navItem.each(function() {
        $(this).click(function() {
            hamburger.toggleClass("ham-active");
            navList.toggleClass("m-nav-active");
        })
    });

    // Change Header BG Coler when Scrolled
    function bgChange() {
        var top = $(window).scrollTop();
        if (top > 350) {
            header.css("background-color", "#29323c");
        } else {
            header.css("background-color" , "transparent");
        }
    };

    // Show Back To Top button When Scrolled
    function backToTop() {
        var top = $(window).scrollTop();
        if (top > 800) {
            scrollUp.addClass("back-to-top");
        } else {
            scrollUp.removeClass("back-to-top");
        }
    };
    
    // Skillbar Loading
    skillbar.waypoint(function () {
		skillbar.each(function () {
			$(this).find(".bar-child").animate({
				width: $(this).data("percent")
			}, 1000);
		});
	}, {
		offset: "80%"
    });

    // Counter Section
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // Poftfolio Popup
    $('.inline-popups').magnificPopup({
		delegate: 'a',
        removalDelay: 300,
        mainClass: 'mfp-zoom-out',
		midClick: true
    });

    // Testimonial Slider
    $(".owl-carousel").owlCarousel({
        loop: true,
        smartSpeed: 500,
        autoplay: true,
        item: 1,
        responsive:{
			0:{
				items:1
			},
			680:{
				items:1
			},
			1000:{
				items:1
            }
        }
    });

    // Change Class of Nav Bars While Scrolling through Different Sections
    function ChangeClass() {
       var top = $(window).scrollTop();

        $.each(sections, function(i,val) {

          var section = $(this),
              section_top = section.offset().top - 5,
              bottom = section_top + section.height();

            if (top >= section_top && top <= bottom) {

              var naItems = navList.find('li');

              $.each(naItems ,function(i,val) {
                var item = $(this);
                item.find("a").removeClass("active");
              });

              navList.find('li [href="#' + section.attr('id') + '"]').addClass('active');
            }

        });

    };

    // Calling bgChange & backToTop Funcions
    $(document).scroll(function() {
        bgChange();
        backToTop();
        ChangeClass();
    });


});