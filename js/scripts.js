$(function() {
	var isMobile = false;
	var justSwitched = false;
	function detectDevice() {
		var temp = isMobile;
		if ( Modernizr.mq('(max-width:999px)') ) {
			isMobile = true;
		} else {
			isMobile = false;
		}
		if ( temp == isMobile ) {
			justSwitched = false;
		} else {
			justSwitched = true;
		}
	}

	function startApp() {
		detectDevice();
		if ( justSwitched ) {
			if ( isMobile ) {
				$('.header').prepend('<span class="menu-open"><i></i></span>');
				$('.nav').prepend('<span class="nav--close"></span>');
				$('.partners--logos').each(function() {
					$(this).after('<div class="partners__grid"></div>');
					var t = $(this).next();
					$(this).find('img').each(function() {
						var img = $(this).attr('src');
						t.append('<div class="partners__item">\
							<div class="item-partners">\
								<div class="item-partners__content" style="background:url('+img+') no-repeat 50% 50%;background-size:contain"></div>\
							</div>\
						</div>');
					});
				});
			} else {
				$('.menu-open, .nav--close, .partners__grid').remove();
				menuClose();
			}
		}
	}
	startApp();
	var lastWidth = $(window).width();
	$(window).on('resize', _.debounce(function() {
		if ( $(window).width() != lastWidth ) {
			startApp();
			lastWidth = $(window).width();
		}
	}, 100));

	$('.quotes').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		dots: false,
		draggable: true,
		autoplay: true,
		autoplaySpeed: 5000,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 1,
					autoplay: false
				}
			}
		]
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
	$('.img-bg').each(function() {
		$(this).parent().css({
			'background': 'url("'+$(this).attr('src')+'") no-repeat center center',
			'background-size': 'cover'
		});
	});
	$('.experts__list--nav a').on('click', function(e) {
		e.preventDefault();
		$('[data-tab="'+$(this).attr('href')+'"]').show().siblings('[data-tab]').hide();
		$(this).parent().addClass('active').siblings().removeClass();
	});
	$('.experts__list--nav .active a').trigger('click');

	function menuOpen() {
		$('.nav, .fade-bg').addClass('is-opened');
	}
	function menuClose() {
		$('.nav, .fade-bg').removeClass('is-opened');
	}

	$(document).on('click', '.menu-open', function() {
		menuOpen();
	});
	$(document).on('click', '.nav--close', function() {
		menuClose();
	});
});