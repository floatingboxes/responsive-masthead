$(document).ready(function() {
	// $('body').addClass('js'); Modernizer will add the js class
	var $menu = $('#menu'),
		$menulink = $('.menu__link');

	$menulink.click(function(e) {
		e.preventDefault();
		$menulink.toggleClass('active');
		$menu.toggleClass('active');
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

});