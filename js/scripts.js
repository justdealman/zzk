$(function() {
	$('.quotes').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		dots: false,
		draggable: true,
		autoplay: true,
		autoplaySpeed: 5000,
		adaptiveHeight: true
	});
	$('.schedule__single--more span').on('click', function(e) {
		e.preventDefault();
		var t = $(this).parents('.schedule__single');
		var c = 'schedule__single_is-minimized';
		if ( t.hasClass(c) ) {
			t.removeClass(c);
			$(this).text('Свернуть');
		} else {
			t.addClass(c);
			$(this).text('Развернуть');
		}
	});
	$('.schedule__group--toggle span').on('click', function(e) {
		e.preventDefault();
		var t = $(this).parents('.schedule__group');
		var c = 'schedule__group_is-minimized';
		if ( t.hasClass(c) ) {
			t.removeClass(c);
			$(this).text('Свернуть программу '+$(this).attr('data'));
		} else {
			t.addClass(c);
			$(this).text('Программа '+$(this).attr('data')+' полностью');
		}
	});
	$('input, textarea').each(function() {
		$(this).data('holder', $(this).attr('placeholder'));
		$(this).focusin(function() {
			$(this).attr('placeholder', '');
		});
		$(this).focusout(function() {
			$(this).attr('placeholder', $(this).data('holder'));
		});
	});
});
