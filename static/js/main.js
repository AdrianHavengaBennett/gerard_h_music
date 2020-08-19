$(function() {
	$('#menu-icon').click(function(e) {
		$('#bg-cover').fadeToggle(1000);
		$(this).fadeToggle(1000);
		$('#exit-menu-icon').delay(1000).fadeToggle(1000);

		$('#about-icon').fadeToggle(300).animate({ top: "15%" }, 700);
		$('#play-media-icon').fadeToggle(300).animate({ right: "15%" }, 700);
		$('#gallery-icon').fadeToggle(300).animate({ left: "15%" }, 700);
		$('#contact-icon').fadeToggle(300).animate({ bottom: "15%" }, 700);
	});
	$('#exit-menu-icon').click(function(e) {
		$('#bg-cover').fadeToggle(1000);
		$(this).fadeToggle(1000);
		$('#menu-icon').delay(1000).fadeToggle(1000);

		$('#about-icon').animate({ top: "0" }, 700).fadeToggle(300);
		$('#play-media-icon').animate({ right: "0" }, 700).fadeToggle(300);
		$('#gallery-icon').animate({ left: "0" }, 700).fadeToggle(300);
		$('#contact-icon').animate({ bottom: "0" }, 700).fadeToggle(300);
	});
});