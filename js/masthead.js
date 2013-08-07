$(document).ready(function() {
	// $('body').addClass('js'); Modernizer will add the js class
	var $menu = $('#menu'),
		$menulink = $('.menu__link'),
		$masthead = $('.masthead');

	$menulink.click(function(e) {
		e.preventDefault();
		$menulink.toggleClass('active');
		$menu.toggleClass('active');
		$masthead.toggleClass('menu-is-open');


		//TODO: This is so very not dry
		if ($('.menu-is-open').length == 0) { 
			var scrollTop = $(window).scrollTop();
			$masthead.css("top", scrollTop);
		}
	});


	var $dropdownLink = $('.has-subnav > a'),
		$disclosureLink = "<a class=\"disclosure\" href=\"#\">+</a>";

	$dropdownLink.after($disclosureLink);

	var $disclosure = $('.disclosure');

	$disclosure.click(function(e) {
		e.preventDefault();
		var $this = $(this);
		$this.toggleClass('active').nextAll('ul').toggleClass('active');

		if ($this.html()=="+") {
			$this.html('–');
		}else{
			$this.html('+');
		};
	});

	$(document).scroll(function() {
		//$("html").css("color", "#FF0000");

		var scrollTop = $(window).scrollTop();

		if ($('.menu-is-open').length == 0) { 
			$('.masthead').css("top", scrollTop);
		}
	
		var menuTop = parseInt($('.masthead').css("top"), 10);

		if (scrollTop < menuTop) {
			$('.menu__link').toggleClass('active');
			$('#menu').toggleClass('active');
			$('.masthead').toggleClass('menu-is-open');
		}
	});


	// Detects if a dropdown menu is going to go off the screen

	$(".has-subnav").on('mouseenter mouseleave', function (e) {
	    var elm = $('ul:first', this);
	    var off = elm .offset();
	    var l = off.left;
	    var w = elm.width();
	    var docW = $("html").width();

	    var isEntirelyVisible = (l+ w <= docW);

	    if ( ! isEntirelyVisible ) {
	        $(this).addClass('edge');
	    } else {
	        $(this).removeClass('edge');
	    }
	});

});

