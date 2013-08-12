
$(document).ready(function() {

	createDisclosureButtons();

	$('.menu__link').click(function(e) {
		e.preventDefault();
		toggleMenu();
		toggleMastheadPostion();
	});
	

	$('.disclosure-button').click(function(e) {
		e.preventDefault();
		$(this).nextAll('ul').toggleClass('active');
		toggleDisclosureButtonIcon($(this));
	});


	$(document).scroll(function() {
		if (menuIsOpen() && userScrollsAboveMenu()) {
			toggleMenu();
			toggleMastheadPostion();
		}
		
	});

	$(".has-subnav").on('mouseenter mouseleave', function (e) {
	    addClassIfSubMenuLeavesScreen($(this));
	});


// Functions =================================================


	function toggleMenu(){
		$('#menu').toggleClass('active');
		$('.menu__link').toggleClass('active');
		$('.masthead').toggleClass('menu-is-open');
	}

	function toggleMastheadPostion() {
		$('.masthead').toggleClass('absolute');

		if ($('.masthead').hasClass('absolute')){
			var scrollTop = $(window).scrollTop();
			$('.masthead').css("top", scrollTop);
		} else {
			$('.masthead').css("top", 0);
		}
	}

	function createDisclosureButtons() {
		var $dropdownLink = $('.has-subnav > a');
		var disclosureLink = "<a class=\"disclosure-button\" href=\"#\">+</a>";
		$dropdownLink.after(disclosureLink);	
	}


	function toggleDisclosureButtonIcon(icon) {
		if (icon.html()=="+") {
			icon.html('–');
		}else{
			icon.html('+');
		};
	}

	function menuIsOpen() {
		return $('.menu-is-open').length > 0;
	}


	function userScrollsAboveMenu() {
		var scrollTop = $(window).scrollTop();
		var menuTop = parseInt($('.masthead').css("top"), 10);
		return scrollTop < menuTop;
	}


	function addClassIfSubMenuLeavesScreen(trigger) {
		var elm = $('ul:first', trigger);
	    var off = elm .offset();
	    var l = off.left;
	    var w = elm.width();
	    var docW = $("html").width();

	    var isEntirelyVisible = (l+ w <= docW);

	    if ( ! isEntirelyVisible ) {
	        trigger.addClass('edge');
	    } else {
	        trigger.removeClass('edge');
	    }
	}

});

