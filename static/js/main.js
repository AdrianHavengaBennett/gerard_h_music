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
		$('#about').fadeOut(300);
		$('#media').fadeOut(300);
		$('#gallery').fadeOut(300);
		$('#contact').fadeOut(300);
		$('#logo-signature').fadeOut(1000);
		$('#about-icon').removeClass('fa fa-times').addClass('fa fa-info-circle');
		$('#play-media-icon').removeClass('fa fa-times').addClass('fa fa-play');
		$('#gallery-icon').removeClass('fa fa-times').addClass('fa fa-picture-o');
		$('#contact-icon').removeClass('fa fa-times').addClass('fa fa-envelope-o');

		$('#bg-cover').fadeToggle(1000);
		$(this).fadeToggle(1000);
		$('#menu-icon').delay(1000).fadeToggle(1000);

		$('#about-icon').animate({ top: "0" }, 700).fadeOut(300);
		$('#play-media-icon').animate({ right: "0" }, 700).fadeOut(300);
		$('#gallery-icon').animate({ left: "0" }, 700).fadeOut(300);
		$('#contact-icon').animate({ bottom: "0" }, 700).fadeOut(300);
	});
	$('#about-icon').click(function(e) {
		$(this).fadeOut(300);
		$('#about').fadeIn(1000);
		$('#logo-signature').fadeIn(1000);

		$('#about i').addClass('fa fa-times close-icon');

		$('#play-media-icon').fadeToggle(300);
		$('#gallery-icon').fadeToggle(300);
		$('#contact-icon').fadeToggle(300);
	});
	$('#play-media-icon').click(function(e) {
		$(this).fadeOut(300);
		$('#media').fadeIn(1000);
		$('#logo-signature').fadeIn(1000);

		$('#media i').addClass('fa fa-times close-icon');

		$('#about-icon').fadeToggle(300);
		$('#gallery-icon').fadeToggle(300);
		$('#contact-icon').fadeToggle(300);
	});
	$('#gallery-icon').click(function(e) {
		$(this).fadeOut(300);
		$('#gallery').fadeIn(1000);
		$('#logo-signature').fadeIn(1000);

		$('#gallery i').addClass('fa fa-times close-icon');

		$('#about-icon').fadeToggle(300);
		$('#play-media-icon').fadeToggle(300);
		$('#contact-icon').fadeToggle(300);
	});
	$('#contact-icon').click(function(e) {
		$(this).fadeOut(300);
		$('#contact').fadeIn(1000);
		$('#logo-signature').fadeIn(1000);

		$('#contact i').addClass('fa fa-times close-icon');

		$('#about-icon').fadeToggle(300);
		$('#play-media-icon').fadeToggle(300);
		$('#gallery-icon').fadeToggle(300);
	});
	$('#about i').click(function(e) {
		$('#about').fadeOut(1000);

		$('#logo-signature').fadeOut(1000);
		$('#about-icon').fadeToggle(1000);
		$('#play-media-icon').fadeToggle(1000);
		$('#gallery-icon').fadeToggle(1000);
		$('#contact-icon').fadeToggle(1000);
	});
	$('#media i').click(function(e) {
		$('#media').fadeOut(1000);

		$('#logo-signature').fadeOut(1000);
		$('#about-icon').fadeToggle(1000);
		$('#play-media-icon').fadeToggle(1000);
		$('#gallery-icon').fadeToggle(1000);
		$('#contact-icon').fadeToggle(1000);
	});
	$('#gallery i').click(function(e) {
		$('#gallery').fadeOut(1000);

		$('#logo-signature').fadeOut(1000);
		$('#about-icon').fadeToggle(1000);
		$('#play-media-icon').fadeToggle(1000);
		$('#gallery-icon').fadeToggle(1000);
		$('#contact-icon').fadeToggle(1000);
	});
	$('#contact i').click(function(e) {
		$('#contact').fadeOut(1000);

		$('#logo-signature').fadeOut(1000);
		$('#about-icon').fadeToggle(1000);
		$('#play-media-icon').fadeToggle(1000);
		$('#gallery-icon').fadeToggle(1000);
		$('#contact-icon').fadeToggle(1000);
	});
});
