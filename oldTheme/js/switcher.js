/* ---------------------------------------------------------------------- */
/*	Style Switcher
/* ---------------------------------------------------------------------- */

var enable_switcher = true;

jQuery(document).ready(function($) {

	if (enable_switcher) {
		
		var currentColor1 = getCookie("cookie_color1"),
			currentColor2 = getCookie("cookie_color2"),
			currentBgPalette = getCookie("cookie_bg_palette"),
			enableStickyMenu = getCookie("cookie_enable_sm"),
			stickyMenuTouchscreen = getCookie("cookie_enable_sm_ts");
		
		if (currentColor1) { $('#main-color1').attr('href', 'css/main_color1/' + currentColor1 + '.css'); }
		else { currentColor1 = 'olive'; }
		if (currentColor2) { $('#main-color2').attr('href', 'css/main_color2/' + currentColor2 + '.css'); }
		else { currentColor2 = 'red'; }
		if (currentBgPalette) { $('#main-bg-scheme').attr('href', 'css/main_bg/' + currentBgPalette + '.css'); }
		else { currentBgPalette = 'green'; }
		if (enableStickyMenu) { enable_sticky_menu = (enableStickyMenu == 'true') ? true : false; }
		if (stickyMenuTouchscreen) { sticky_menu_touchscreen = (stickyMenuTouchscreen == 'true') ? true : false; }
		
		var $switcher = $('<div id="style-switcher"> \
								<span class="toggle-button"></span> \
								<h5>Picked Color Schemes</h5> \
								<ul id="sw-color-schemes" class="thumbs clearfix"> \
									<li><a href="#" title="Olive + Red + Green Background"> \
										<div data-sm="color1-sm" class="color1-olive"></div> \
										<div data-sm="color2-sm" class="color2-red"></div> \
										<div data-sm="bg-sm" class="palette-green"></div> \
									</a></li> \
									<li><a href="#" title="Beige + Red + Brown Background"> \
										<div data-sm="color1-sm" class="color1-beige"></div> \
										<div data-sm="color2-sm" class="color2-red"></div> \
										<div data-sm="bg-sm" class="palette-brown"></div> \
									</a></li> \
									<li><a href="#" title="Brown + Orange + Brown Background"> \
										<div data-sm="color1-sm" class="color1-brown"></div> \
										<div data-sm="color2-sm" class="color2-orange"></div> \
										<div data-sm="bg-sm" class="palette-brown"></div> \
									</a></li> \
									<li><a href="#" title="Rust + Red + Red Background"> \
										<div data-sm="color1-sm" class="color1-rust"></div> \
										<div data-sm="color2-sm" class="color2-red"></div> \
										<div data-sm="bg-sm" class="palette-red"></div> \
									</a></li> \
									<li><a href="#" title="Copper Rose + Pink + Red Background"> \
										<div data-sm="color1-sm" class="color1-copper-rose"></div> \
										<div data-sm="color2-sm" class="color2-pink"></div> \
										<div data-sm="bg-sm" class="palette-red"></div> \
									</a></li> \
									<li><a href="#" title="Violet + Red + Blue Background"> \
										<div data-sm="color1-sm" class="color1-violet"></div> \
										<div data-sm="color2-sm" class="color2-red"></div> \
										<div data-sm="bg-sm" class="palette-blue"></div> \
									</a></li> \
									<li><a href="#" title="Blue + Red + Blue Background"> \
										<div data-sm="color1-sm" class="color1-blue"></div> \
										<div data-sm="color2-sm" class="color2-red"></div> \
										<div data-sm="bg-sm" class="palette-blue"></div> \
									</a></li> \
									<li><a href="#" title="Navy + Orange + Blue Background"> \
										<div data-sm="color1-sm" class="color1-navy"></div> \
										<div data-sm="color2-sm" class="color2-orange"></div> \
										<div data-sm="bg-sm" class="palette-blue"></div> \
									</a></li> \
									<li><a href="#" title="Navy + Dark Yellow + Blue Background"> \
										<div data-sm="color1-sm" class="color1-navy"></div> \
										<div data-sm="color2-sm" class="color2-dark-yellow"></div> \
										<div data-sm="bg-sm" class="palette-blue"></div> \
									</a></li> \
									<li><a href="#" title="Light Blue + Red + Blue Background"> \
										<div data-sm="color1-sm" class="color1-light-blue"></div> \
										<div data-sm="color2-sm" class="color2-red"></div> \
										<div data-sm="bg-sm" class="palette-blue"></div> \
									</a></li> \
									<li><a href="#" title="Sea Green + Pink + Blue Background"> \
										<div data-sm="color1-sm" class="color1-sea-green"></div> \
										<div data-sm="color2-sm" class="color2-pink"></div> \
										<div data-sm="bg-sm" class="palette-blue"></div> \
									</a></li> \
									<li><a href="#" title="Green + Red + Green Background"> \
										<div data-sm="color1-sm" class="color1-green"></div> \
										<div data-sm="color2-sm" class="color2-red"></div> \
										<div data-sm="bg-sm" class="palette-green"></div> \
									</a></li> \
								</ul> \
								<h5>Main Color 1</h5> \
								<ul id="sw-color1" class="thumbs clearfix"> \
									<li><a href="#" title="Color 1: Olive"> \
										<div data-sm="color1-sm" class="color1-olive"></div> \
									</a></li> \
									<li><a href="#" title="Color 1: Beige"> \
										<div data-sm="color1-sm" class="color1-beige"></div> \
									</a></li> \
									<li><a href="#" title="Color 1: Brown"> \
										<div data-sm="color1-sm" class="color1-brown"></div> \
									</a></li> \
									<li><a href="#" title="Color 1: Rust"> \
										<div data-sm="color1-sm" class="color1-rust"></div> \
									</a></li> \
									<li><a href="#" title="Color 1: Copper Rose"> \
										<div data-sm="color1-sm" class="color1-copper-rose"></div> \
									</a></li> \
									<li><a href="#" title="Color 1: Maroon"> \
										<div data-sm="color1-sm" class="color1-maroon"></div> \
									</a></li> \
									<li><a href="#" title="Color 1: Violet"> \
										<div data-sm="color1-sm" class="color1-violet"></div> \
									</a></li> \
									<li><a href="#" title="Color 1: Blue"> \
										<div data-sm="color1-sm" class="color1-blue"></div> \
									</a></li> \
									<li><a href="#" title="Color 1: Navy"> \
										<div data-sm="color1-sm" class="color1-navy"></div> \
									</a></li> \
									<li><a href="#" title="Color 1: Light Blue"> \
										<div data-sm="color1-sm" class="color1-light-blue"></div> \
									</a></li> \
									<li><a href="#" title="Color 1: Sea Green"> \
										<div data-sm="color1-sm" class="color1-sea-green"></div> \
									</a></li> \
									<li><a href="#" title="Color 1: Irish Green"> \
										<div data-sm="color1-sm" class="color1-irish-green"></div> \
									</a></li> \
									<li><a href="#" title="Color 1: Green"> \
										<div data-sm="color1-sm" class="color1-green"></div> \
									</a></li> \
								</ul> \
								<h5>Main Color 2</h5> \
								<ul id="sw-color2" class="thumbs clearfix"> \
									<li><a href="#" title="Color 2: Red"> \
										<div data-sm="color2-sm" class="color2-red"></div> \
									</a></li> \
									<li><a href="#" title="Color 2: Orange"> \
										<div data-sm="color2-sm" class="color2-orange"></div> \
									</a></li> \
									<li><a href="#" title="Color 2: Dark Yellow"> \
										<div data-sm="color2-sm" class="color2-dark-yellow"></div> \
									</a></li> \
									<li><a href="#" title="Color 2: Pink"> \
										<div data-sm="color2-sm" class="color2-pink"></div> \
									</a></li> \
								</ul> \
								<h5>Main Background</h5> \
								<ul id="sw-bg-palettes" class="thumbs clearfix mb-10px"> \
									<li><a href="#" title="Green Background"> \
										<div data-sm="bg-sm" class="palette-green"></div> \
									</a></li> \
									<li><a href="#" title="Blue Background"> \
										<div data-sm="bg-sm" class="palette-blue"></div> \
									</a></li> \
									<li><a href="#" title="Red Background"> \
										<div data-sm="bg-sm" class="palette-red"></div> \
									</a></li> \
									<li><a href="#" title="Brown Background"> \
										<div data-sm="bg-sm" class="palette-brown"></div> \
									</a></li> \
								</ul> \
								<h5>Fixed (sticky) menu:</h5> \
								<div class="checkbox-fields"> \
									<input name="sm-enabled" type="checkbox" id="sticky-menu-mode"> \
									<label for="sm-enabled">enable</label> \
									<input name="sm-enabled-ts" type="checkbox" id="sticky-menu-mode-ts"> \
									<label for="sm-enabled-ts">also enable on touch screens</label> \
								</div> \
								<a href="#" id="reset">Reset styles</a> \
							</div>');
		$switcher.insertAfter('#footer-bottom');
		
		$switcher.find('#sw-color1 [data-sm="color1-sm"].color1-' + currentColor1).parent().addClass('active');
		$switcher.find('#sw-color2 [data-sm="color2-sm"].color2-' + currentColor2).parent().addClass('active');
		$switcher.find('#sw-bg-palettes [data-sm="bg-sm"].palette-' + currentBgPalette).parent().addClass('active');
		
		if (enable_sticky_menu ) { $('#sticky-menu-mode').prop('checked', true); }
		else { $('#sticky-menu-mode-ts').prop('disabled', true); }
		if (sticky_menu_touchscreen) { $('#sticky-menu-mode-ts').prop('checked', true); }
		
		$switcher.find('.toggle-button').click(function() {
			if ($switcher.css('left') === '-335px') {
				$switcher.animate({left: '0px'});
			} else {
				$switcher.animate({left: '-335px'});
			}
			return false;
		});
		
		// Check color scheme
		function checkColorScheme() {
			$switcher.find('#sw-color-schemes li').each(function() {
				var color1Name = $('a [data-sm="color1-sm"]', this).attr('class').substr(7),
					color2Name = $('a [data-sm="color2-sm"]', this).attr('class').substr(7),
					bgPaletteName = $('a [data-sm="bg-sm"]', this).attr('class').substr(8);
				
				if (color1Name == currentColor1 && color2Name == currentColor2 && bgPaletteName == currentBgPalette) {
					$('a', this).addClass('active');
				} else {
					$('a', this).removeClass('active');
				}
			});
		}
		checkColorScheme();
		
		// Change color scheme
		$switcher.find('#sw-color-schemes li a').click(function() {
			var color1Name = $('[data-sm="color1-sm"]', this).attr('class').substr(7),
				color2Name = $('[data-sm="color2-sm"]', this).attr('class').substr(7),
				bgPaletteName = $('[data-sm="bg-sm"]', this).attr('class').substr(8),
				color1Button = $switcher.find('#sw-color1 [data-sm="color1-sm"].color1-' + color1Name).parent(),
				color2Button = $switcher.find('#sw-color2 [data-sm="color2-sm"].color2-' + color2Name).parent(),
				bgPaletteButton = $switcher.find('#sw-bg-palettes [data-sm="bg-sm"].palette-' + bgPaletteName).parent();
				
			changeMainColor1(color1Button);
			changeMainColor2(color2Button);
			changeMainBg(bgPaletteButton);
			$(this).parent().siblings().find('a').removeClass('active');
			$(this).addClass('active');
			return false;
		});
		
		// Change main color 1
		$switcher.find('#sw-color1 li a').click(function() {
			changeMainColor1(this);
			checkColorScheme();
			return false;
		});
		
		function changeMainColor1(a) {
			currentColor1 = $('[data-sm="color1-sm"]', a).attr('class').substr(7);
			$('#main-color1' ).attr('href', 'css/main_color1/' + currentColor1 + '.css');
			$(a).parent().siblings().find('a').removeClass('active');
			$(a).addClass('active');
			changeCookies();
		}
		
		// Change main color 2
		$switcher.find('#sw-color2 li a').click(function() {
			changeMainColor2(this);
			checkColorScheme();
			return false;
		});
		
		function changeMainColor2(a) {
			currentColor2 = $('[data-sm="color2-sm"]', a).attr('class').substr(7);
			$('#main-color2' ).attr('href', 'css/main_color2/' + currentColor2 + '.css');
			$(a).parent().siblings().find('a').removeClass('active');
			$(a).addClass('active');
			changeCookies();
		}
		
		// Change main background
		$switcher.find('#sw-bg-palettes li a').click(function() {
			changeMainBg(this);
			checkColorScheme();
			return false;
		});
		
		function changeMainBg(a) {
			currentBgPalette = $('[data-sm="bg-sm"]', a).attr('class').substr(8);
			$('#main-bg-scheme' ).attr('href', 'css/main_bg/' + currentBgPalette + '.css');
			$(a).parent().siblings().find('a').removeClass('active');
			$(a).addClass('active');
			changeCookies();
		}
		
		$('#sticky-menu-mode').change(function() {
			if ($(this).is(':checked')) {
				enable_sticky_menu = true;
				$('#sticky-menu-mode-ts').prop('disabled', false);
				adjustStickyMenu();
			} else {
				enable_sticky_menu = false;
				$('#sticky-menu-mode-ts').prop('disabled', true);
				if ($('body').hasClass('sticky-menu-active')) {
					$('body').removeClass('sticky-menu-active').css('padding-top', 0);
					$('#logo').off('click');
					$('#header').css('top', '');
				}
			}
			changeCookies();
        });
		
		$('#sticky-menu-mode-ts').change(function() {
			if ($(this).is(':checked')) {
				sticky_menu_touchscreen = true;
				adjustStickyMenu();
			} else {
				sticky_menu_touchscreen = false;
				if (isTouchScreenDevice && $('body').hasClass('sticky-menu-active')) {
					$('body').removeClass('sticky-menu-active').css('padding-top', 0);
					$('#logo').off('click');
					$('#header').css('top', '');
				}
			}
			changeCookies();
        });
		
		// Reset settings
		$switcher.find('#reset').click(function() {
			$('#main-color1').attr('href', 'css/main_color1/olive.css');
			$('#main-color2').attr('href', 'css/main_color2/red.css');
			$('#main-bg-scheme').attr('href', 'css/main_bg/green.css');
			
			$switcher.find('#sw-color1 li a').removeClass('active').find('.color1-olive').parent().addClass('active');
			$switcher.find('#sw-color2 li a').removeClass('active').find('.color2-red').parent().addClass('active');
			$switcher.find('#sw-bg-palettes li a').removeClass('active').find('.palette-green').parent().addClass('active');
			
			currentColor1 = 'olive';
			currentColor2 = 'red';
			currentBgPalette = 'green';
			enable_sticky_menu = false;
			sticky_menu_touchscreen = true;
			checkColorScheme();
			
			$('#sticky-menu-mode').prop('checked', false);
			$('#sticky-menu-mode-ts').prop('checked', true);
			$('#sticky-menu-mode-ts').prop('disabled', true);
			if ($('body').hasClass('sticky-menu-active')) {
				$('body').removeClass('sticky-menu-active').css('padding-top', 0);
				$('#logo').off('click');
				$('#header').css('top', '');
			}
			
			deleteCookie("cookie_color1", "http://e-merald.com/");
			deleteCookie("cookie_color2", "http://e-merald.com/");
			deleteCookie("cookie_bg_palette", "http://e-merald.com/");
			deleteCookie("cookie_enable_sm", "http://e-merald.com/");
			deleteCookie("cookie_enable_sm_ts", "http://e-merald.com/");
			
			return false;
		});
		
		// Change cookies
		function changeCookies() {
			var expiry = new Date();
			expiry.setTime(expiry.getTime() + 30*60*1000);
			setCookie("cookie_color1", currentColor1, expiry.toGMTString(), "http://e-merald.com/");
			setCookie("cookie_color2", currentColor2, expiry.toGMTString(), "http://e-merald.com/");
			setCookie("cookie_bg_palette", currentBgPalette, expiry.toGMTString(), "http://e-merald.com/");
			setCookie("cookie_enable_sm", enable_sticky_menu.toString(), expiry.toGMTString(), "http://e-merald.com/");
			setCookie("cookie_enable_sm_ts", sticky_menu_touchscreen.toString(), expiry.toGMTString(), "http://e-merald.com/");
		}
		
	}
	
});

function setCookie (name, value, expires, path, domain, secure) {
	document.cookie = name + "=" + escape(value) +
		(expires ? "; expires=" + expires : "") +
		(path ? "; path=" + path : "") +
		(domain ? "; domain=" + domain : "") +
		(secure ? "; secure" : "");
}

function getCookie(name) {
	var prefix = name + "=";
	var cookieStartIndex = document.cookie.indexOf(prefix);
	if (cookieStartIndex == -1) return null;
	var cookieEndIndex = document.cookie.indexOf(";", cookieStartIndex + prefix.length);
	if (cookieEndIndex == -1) cookieEndIndex = document.cookie.length;
	return unescape(document.cookie.substring(cookieStartIndex + prefix.length, cookieEndIndex));
}
function deleteCookie(name, path, domain) {
	if (getCookie(name)) {
		document.cookie = name + "=" + (path ? "; path=" + path : "") + (domain ? "; domain=" + domain : "") + "; expires=Thu, 01-Jan-70 00:00:01 GMT";
	}
}