var enable_sticky_menu, sticky_menu_touchscreen;

// When DOM is fully loaded
jQuery(document).ready(function($) {

	/* ---------------------------------------------------------------------- */
	/*	Detect Touch Screen Devices
	/* ---------------------------------------------------------------------- */
	
	(function() {
		if (isTouchScreenDevice) {
			$('body').addClass('touch-screen');
		} else {
			$('body').addClass('no-touch-screen');
		}
		if (isAndroid) {
			$('body').addClass('android-device');
		}
	})();
	

	/* ---------------------------------------------------------------------- */
	/*	Main Navigation
	/* ---------------------------------------------------------------------- */
	/*
	* jQuery Superfish Menu Plugin - v1.7.4
	* Copyright (c) 2013 Joel Birch
	*
	* Dual licensed under the MIT and GPL licenses:
	*	http://www.opensource.org/licenses/mit-license.php
	*	http://www.gnu.org/licenses/gpl.html
	*/
	
	;(function(e){"use strict";var s=function(){var s={bcClass:"sf-breadcrumb",menuClass:"sf-js-enabled",anchorClass:"sf-with-ul",menuArrowClass:"sf-arrows"},o=function(){var s=/iPhone|iPad|iPod/i.test(navigator.userAgent);return s&&e(window).load(function(){e("body").children().on("click",e.noop)}),s}(),n=function(){var e=document.documentElement.style;return"behavior"in e&&"fill"in e&&/iemobile/i.test(navigator.userAgent)}(),t=function(e,o){var n=s.menuClass;o.cssArrows&&(n+=" "+s.menuArrowClass),e.toggleClass(n)},i=function(o,n){return o.find("li."+n.pathClass).slice(0,n.pathLevels).addClass(n.hoverClass+" "+s.bcClass).filter(function(){return e(this).children(n.popUpSelector).hide().show().length}).removeClass(n.pathClass)},r=function(e){e.children("a").toggleClass(s.anchorClass)},a=function(e){var s=e.css("ms-touch-action");s="pan-y"===s?"auto":"pan-y",e.css("ms-touch-action",s)},l=function(s,t){var i="li:has("+t.popUpSelector+")";e.fn.hoverIntent&&!t.disableHI?s.hoverIntent(u,p,i):s.on("mouseenter.superfish",i,u).on("mouseleave.superfish",i,p);var r="MSPointerDown.superfish";o||(r+=" touchend.superfish"),n&&(r+=" mousedown.superfish"),s.on("focusin.superfish","li",u).on("focusout.superfish","li",p).on(r,"a",t,h)},h=function(s){var o=e(this),n=o.siblings(s.data.popUpSelector);n.length>0&&n.is(":hidden")&&(o.one("click.superfish",!1),"MSPointerDown"===s.type?o.trigger("focus"):e.proxy(u,o.parent("li"))())},u=function(){var s=e(this),o=d(s);clearTimeout(o.sfTimer),s.siblings().superfish("hide").end().superfish("show")},p=function(){var s=e(this),n=d(s);o?e.proxy(f,s,n)():(clearTimeout(n.sfTimer),n.sfTimer=setTimeout(e.proxy(f,s,n),n.delay))},f=function(s){s.retainPath=e.inArray(this[0],s.$path)>-1,this.superfish("hide"),this.parents("."+s.hoverClass).length||(s.onIdle.call(c(this)),s.$path.length&&e.proxy(u,s.$path)())},c=function(e){return e.closest("."+s.menuClass)},d=function(e){return c(e).data("sf-options")};return{hide:function(s){if(this.length){var o=this,n=d(o);if(!n)return this;var t=n.retainPath===!0?n.$path:"",i=o.find("li."+n.hoverClass).add(this).not(t).removeClass(n.hoverClass).children(n.popUpSelector),r=n.speedOut;s&&(i.show(),r=0),n.retainPath=!1,n.onBeforeHide.call(i),i.stop(!0,!0).animate(n.animationOut,r,function(){var s=e(this);n.onHide.call(s)})}return this},show:function(){var e=d(this);if(!e)return this;var s=this.addClass(e.hoverClass),o=s.children(e.popUpSelector);return e.onBeforeShow.call(o),o.stop(!0,!0).animate(e.animation,e.speed,function(){e.onShow.call(o)}),this},destroy:function(){return this.each(function(){var o,n=e(this),i=n.data("sf-options");return i?(o=n.find(i.popUpSelector).parent("li"),clearTimeout(i.sfTimer),t(n,i),r(o),a(n),n.off(".superfish").off(".hoverIntent"),o.children(i.popUpSelector).attr("style",function(e,s){return s.replace(/display[^;]+;?/g,"")}),i.$path.removeClass(i.hoverClass+" "+s.bcClass).addClass(i.pathClass),n.find("."+i.hoverClass).removeClass(i.hoverClass),i.onDestroy.call(n),n.removeData("sf-options"),void 0):!1})},init:function(o){return this.each(function(){var n=e(this);if(n.data("sf-options"))return!1;var h=e.extend({},e.fn.superfish.defaults,o),u=n.find(h.popUpSelector).parent("li");h.$path=i(n,h),n.data("sf-options",h),t(n,h),r(u),a(n),l(n,h),u.not("."+s.bcClass).superfish("hide",!0),h.onInit.call(this)})}}}();e.fn.superfish=function(o){return s[o]?s[o].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof o&&o?e.error("Method "+o+" does not exist on jQuery.fn.superfish"):s.init.apply(this,arguments)},e.fn.superfish.defaults={popUpSelector:"ul,.sf-mega",hoverClass:"sfHover",pathClass:"overrideThisToUse",pathLevels:1,delay:800,animation:{opacity:"show"},animationOut:{opacity:"hide"},speed:"normal",speedOut:"fast",cssArrows:!0,disableHI:!1,onInit:e.noop,onBeforeShow:e.noop,onShow:e.noop,onBeforeHide:e.noop,onHide:e.noop,onIdle:e.noop,onDestroy:e.noop},e.fn.extend({hideSuperfishUl:s.hide,showSuperfishUl:s.show})})(jQuery);
	
	// Correct the position of those submenus that overlap the right margin of a page
	(function() {
		
		var menuItemPadding = parseInt($('#main-menu').children('li').find('a').css('padding-left')),
			menuWidth = $('#primary-nav').width() + menuItemPadding,
			mWidth = menuWidth,
			overlapWidth = 3;
		
		$('#main-menu > li').each(function() {
			// needed to determine the correct width of submenu with arrows before menu plugin initialization
			$(this).find('ul>li').has('ul').children('a').addClass('sf-with-ul');
			
			var $liTop = $(this),
				topItemWidth = $liTop.width(),
				submenuWidth = $liTop.children('ul').width();
			if (submenuWidth > mWidth) {
				$liTop.children('ul').css('left', (mWidth - submenuWidth) + 'px');
			}
			
			$liTop.find('>ul>li').has('ul').each(function(){
				var $liSub = $(this),
					submenu2Width = $liSub.children('ul').width(),
					submenu2Left;
				if (submenuWidth > mWidth || (submenuWidth + submenu2Width - overlapWidth) > mWidth) {
					submenu2Left = -submenu2Width + overlapWidth;
				} else {
					submenu2Left = submenuWidth - overlapWidth;
				}
				$liSub.children('ul').css('left', submenu2Left + 'px');
				
				$liSub.find('>ul>li').has('ul').each(function(){
					var $liSub2 = $(this),
						submenu3Width = $liSub2.children('ul').width(),
						submenu3Left;
					if ((submenu2Left + submenu2Width + submenu3Width - overlapWidth) > mWidth) {
						submenu3Left = -submenu3Width + 2 * overlapWidth;
					} else {
						submenu3Left = submenu2Width - overlapWidth;
					}
					$liSub2.children('ul').css('left', submenu3Left + 'px');
				});
				
			});
			
			// megamenu: set width and position
			if ($liTop.attr('class') == 'sf-mega-parent') {
				var $megaMenu = $liTop.find('.sf-mega'),
					$megaMenuTable = $liTop.find('.sf-mega-table'),
					megaWidth = 0,
					megaWidthFull,
					megaPadding = parseInt($megaMenu.css('padding-left')),
					sectionClassWidth;
				$megaMenuTable.children('.sf-mega-section').each(function(){
					var $this = $(this);
					sectionClassWidth = parseInt($this.attr('class').replace(/[^0-9]/g, ''));
					megaWidth += isNaN(sectionClassWidth) ? $this.width() : sectionClassWidth;
				});
				$megaMenu.css('width', megaWidth + 'px');
				megaWidthFull = megaWidth + 2 * megaPadding;
				if (megaWidthFull > mWidth) {
					$megaMenu.css({'left': 'auto', 'right': -menuItemPadding + 'px'});
				} else {
					$megaMenu.css('left', (menuWidth - mWidth) + 'px');
				}
			}
			
			mWidth -= topItemWidth;
		});
		
	})();
	
	// Initialise plugin
	$('#main-menu').superfish({
		delay: 200,									// delay on mouseout 
		animation: {opacity:'show'},				// fade-in (opacity:'show') and slide-down (height:'show') animation
		speed: 'fast',								// animation speed
		cssArrows: true,							// enable/disable generation of arrow mark-up
		onInit: function(){
			
			// compensate the reverse action of the toggleAnchorClass function
			$('#main-menu > li').find('ul>li').has('ul').children('a').addClass('sf-with-ul');
			
			// do nothing when clicking the menu items with "#" href attribute
			$('a[href="#"]', this).on('click', function(e) {
				return false;
			});
			
			if (isTouchScreenDevice && $(window).width() >= 768) {
				hideOnTouchOutside();
			}
		}
	});
	
	// (For touch screens) Hide opened submenus when user clicks outside the menu's area
	function hideOnTouchOutside() {
		$('html').on('touchend', function(e) {
			$('#main-menu > li.sfHover').mouseout();
		});
		$('#main-menu').on('touchstart touchend', function(e){
			e.stopPropagation();
		});
	}
	
	// Responsive menu
	(function() {
		selectnav('main-menu', {
			activeclass: 'current',
			autoselect: false,
			nested: true,
			indent: '-',
			label: 'Select a page...'
		});		
	})();
	
	// Position menu if it is too wide
	(function() {
		
		var navMarginTop = $('#navigation').css('margin-top');
		
		function positionMainMenu() {
			
			if ($(window).width() >= 768) {
				var headerWidth = $('#header .container').width() - 20,
					logoWidth = $('#logo img').css('display') == 'none' ? $('#logo').width() : $('#logo img').width(),
					menuWidth = 0;
					
				$('#main-menu > li').each(function() {
					menuWidth += $(this).width();
				});
				
				if (logoWidth + menuWidth > headerWidth) {
					$('#navigation').css('margin-left', logoWidth + 'px');
				} else {
					$('#navigation').css('margin-left', '');
				}
			} else {
				$('#navigation').css('margin-left', '');
			}
		}
	
		positionMainMenu();
		
		$(window).load(function() {
			positionMainMenu();
		});
		
		$(window).on('resize', function() {
			positionMainMenu();
		});
		
		$(window).on('scroll', function() {
			positionMainMenu();
		});
		
	})();
	// ***
	
	$('.ie8 #primary-nav ul ul li:last-child').css('border-bottom', 'none');
	$('.ie8 #primary-nav > ul > li:last-child > a').css('padding-right', '0');
	
	
	/* ---------------------------------------------------------------------- */
	/*	Sticky Menu
	/* ---------------------------------------------------------------------- */
	
	(function() {
		
		enable_sticky_menu = false; // enable sticky menu mode
		sticky_menu_touchscreen = true; // enable sticky menu mode on touchscreen devices
		
		var $header = $('#header'),
			$topBar = $('#top-bar'),
			$logo = $('#logo'),
			headerHeight = $header.height(),
			topBarHeight = $topBar.length ? $topBar.outerHeight() : 0,
			headerYPos = $header.hasClass('extended') ? -39 : -20 - topBarHeight,
			minScroll = headerHeight + 105;
		
		window.adjustStickyMenu = function () {
			if (enable_sticky_menu) {
				if (!isTouchScreenDevice || (isTouchScreenDevice && sticky_menu_touchscreen)) {
					if ($(window).scrollTop() > minScroll && $(window).width() >= 768) {
						if ($('body').hasClass('sticky-menu-active')) {
							return false;
						}
						$('body').addClass('sticky-menu-active');
						$('#logo').on('click', function() {
							$('html, body').animate({scrollTop: 0}, 400, 'easeInOutQuint');
							return false;
						});
						$('body').css('padding-top', headerHeight);
						$header.animate({top: headerYPos}, 200, function() {});
					} else {
						if ($('body').hasClass('sticky-menu-active')) {
							$('body').removeClass('sticky-menu-active').css('padding-top', 0);
							$('#logo').off('click');
							$header.css('top', '');
						}
					}
				}
			}
		};

		adjustStickyMenu();
		
		$(window).on('resize', function() {
			adjustStickyMenu();
		});
		
		$(window).on('scroll', function() {
			adjustStickyMenu();
		});
	
	})();
	
	
	/* ---------------------------------------------------------------------- */
	/*	Sticky Footer
	/* ---------------------------------------------------------------------- */
	/*
	* Sticks the footer to the bottom of the page if the page content is less than the browser window height
	*/
	
	(function() {
		
		window.positionFooter = function () {
			
			var $footer = $('#footer'),
				$footerBottom = $('#footer-bottom'),
				bwfHeight = $('#header').height() + $('#main').height(), // body without footers
				fTop = 0;
			
			$('#page-content .columns-wrapper').css('height', '');
			
			// set the height value for sidebar
			if ($('#sidebar').length && $('#main-content').length) {
				if ($(window).width() >= 768) {
					if ($(document.body).height() < $(window).height()) {
						var wrapperHeight = $(window).height() - $('#header').height() - $('#page-title').height() - $footer.outerHeight(true) - $footerBottom.innerHeight();
						$('#page-content .columns-wrapper').css('height', wrapperHeight + 'px');
					}
				}
			}
			
			// set the position value for footer
			if (((bwfHeight + $footer.outerHeight(true) + $footerBottom.innerHeight()) < $(window).height() && $footer.css('position') == 'fixed') || ($(document.body).height() < $(window).height() && $footer.css('position') != 'fixed')) {
				fTop = $footerBottom.innerHeight() + 'px';
				$footerBottom.css({'position': 'fixed', 'bottom': '0', 'left': '0'});
				$footer.css({position: 'fixed', 'bottom': fTop, 'left': '0'});
			} else {
				if ($footer.css('position') == 'fixed') {
					$footer.css({'position': 'relative', 'bottom': 'auto', 'left': 'auto'});
					$footerBottom.css({'position': 'relative', 'bottom': 'auto', 'left': 'auto'});
				}
			}
		};
		
		$(window).load(function() {
			positionFooter();
		});
		
		$(window).on('resize', function() {
			positionFooter();
		});
		
		$('html').on('click', function() {
			positionFooter();
		});
		
		
	})();
	
	
	/* ---------------------------------------------------------------------- */
	/*	Scroll Top
	/* ---------------------------------------------------------------------- */
	
	$('span.scroll-top').click(function() {
		$('html, body').animate({scrollTop: 0}, 400, 'easeInOutQuint');
		return false;
	});
	
	
	/* ---------------------------------------------------------------------- */
	/*	Home Intro Title
	/* ---------------------------------------------------------------------- */
	(function() {
		
		function adjustTitle() {
			if ($(window).width() < 960) {
				$('#home-intro h1').html(titleMod);
				
				// IE8 correction
				$('.ie8 .intro-content .divider-pattern:last-child, .ie8 .intro-content .divider-line:last-child, .ie8 .intro-content .divider-dashline:last-child').css('display', 'none');
			} else {
				$('#home-intro h1').html(titleOrig);
				
				// IE8 correction
				$('.ie8 .intro-content .divider-pattern:last-child, .ie8 .intro-content .divider-line:last-child, .ie8 .intro-content .divider-dashline:last-child').css('display', '');
			}
		}
		
		if ($('#home-intro').length) {
			var titleOrig = $('#home-intro h1').html(),
				titleMod = titleOrig.replace(/<br>/i, ' ');
				
			adjustTitle();
			
			$(window).on('resize', function() {
				adjustTitle();
			});
		}
	})();
	
	/* ---------------------------------------------------------------------- */
	/*	Image Overlay Functionality (for touch screens)
	/* ---------------------------------------------------------------------- */
	
	(function() {
		
		if (isTouchScreenDevice) {
			$('.item-picture').on('touchend', function(e) {
				var $current = $(this);
				
				// not to be applied to image gallery slider or projects carousel
				if (!$current.parent().parent().is('.flexslider') && !$current.parent().parent().parent().is('#projects-carousel')) {
					e.stopPropagation();
					
					$('.item-picture').each(function(index) {
						if ($(this)[0] !== $current[0]) {
							// not to be applied to image gallery slider or projects carousel
							if (!$(this).parent().parent().is('.flexslider, #projects-carousel')) {
								$('.image-overlay', this).css('background', 'rgba(0, 0, 0, 0)');
								$('.image-overlay span', this).css({'display': 'none', 'opacity': '0'});
							}
						}
					});
					
					if ($('.image-overlay span', this).css('display') == 'none') {
						e.preventDefault();
						$('.image-overlay', this).css('background', 'rgba(0, 0, 0, 0.5)');
						$('.image-overlay span', this).css({'display': 'block', 'opacity': '1'});
					}	
				}
			});
			
			$('html').on('touchend', function() {
				$('.item-picture').each(function() {
					// not to be applied to image gallery slider or projects carousel
					if (!$(this).parent().parent().is('.flexslider') && !$(this).parent().parent().parent().is('#projects-carousel')) {
						$('.image-overlay', this).css('background', 'rgba(0, 0, 0, 0)');
						$('.image-overlay span', this).css({'display': 'none', 'opacity': '0'});
					}
				});
			});
		}
		
	})();
	
	
	/* ---------------------------------------------------------------------- */
	/*	Projects Carousel
	/* ---------------------------------------------------------------------- */

	(function() {
		
		var $carousel = $('#projects-carousel');
		
		function getWindowWidth() {
			if ($(window).width() < 768) { // for small-screen mobile devices
				visibleSlides = animationStep = 1;
			} else if ($(window).width() < 960) { // for a width of 768px
				if (fullWidth && carouselClass != 'two-slides') { visibleSlides = animationStep = 3; }
				else { visibleSlides = animationStep = 2; }
			} else if ($(window).width() < 1200) { // for a width of 1024px
				if (fullWidth && carouselClass == 'four-slides') { visibleSlides = animationStep = 4; }
				else if (fullWidth && carouselClass == 'two-slides') { visibleSlides = animationStep = 2; }
				else { visibleSlides = animationStep = 3; }
			} else { // for a width of 1280px and higher
				if (carouselClass == 'three-slides') { visibleSlides = animationStep = 3; }
				else if (carouselClass == 'four-slides') { visibleSlides = animationStep = 4; }
				else if (fullWidth && carouselClass == 'two-slides') { visibleSlides = animationStep = 2; }
			}
		}
		
		function adjustCarousel() {
			getWindowWidth();
			if (visibleSlides != carousel.settings.visibleSlides) {
				carousel.update({
					animation: {step: animationStep},
					visibleSlides: visibleSlides
				});
			}
		}
		
		if ($carousel.length) {
		
			var animationStep, visibleSlides, carouselClass,
				fullWidth = $('#main-content').length ? false : true;
				
			if ($carousel.hasClass('two-slides')) { carouselClass = 'two-slides'; }
			else if ($carousel.hasClass('four-slides')) { carouselClass = 'four-slides'; }
			else { carouselClass = 'three-slides'; }
			
			// Init carousel
			getWindowWidth();
			var carousel = new Carousel($carousel, {animation: {step: animationStep}, visibleSlides: visibleSlides});
			carousel.init();
			
			// Window resize event
			$(window).on('resize', function() {
				var timer = window.setTimeout(function() {
					window.clearTimeout(timer);
					adjustCarousel();
				}, 30);
			});
		}

	})();
	
	
	/* ---------------------------------------------------------------------- */
	/*	Testimonials Carousel
	/* ---------------------------------------------------------------------- */

	(function() {
		
		var $carousel = $('.testimonials-carousel'),
			carousel_params = {animation: {duration: 300, step: 1}, visibleSlides: 1, behavior: {autoplay: 0, circular: false}};
		
		if ($carousel.length) {
			
			var resizeCarousel = function() {
				$carousel.each(function() {
					var containerWidth = $(this).parent().parent().parent().width();
					$(this).children('li').css('width', containerWidth + 'px');
				});
			};
			
			resizeCarousel();
			
			// Window resize event
			$(window).on('resize', function() {
				var timer = window.setTimeout(function() {
					window.clearTimeout(timer);
					resizeCarousel();
				}, 30);
			});
			
			// Init carousel
			if ($carousel.attr('data-autoplay') > 0) { carousel_params.behavior.autoplay = $carousel.attr('data-autoplay'); }
			if ($carousel.attr('data-circular') == 'yes') { carousel_params.behavior.circular = true; }
			if ($carousel.attr('data-circular') == 'no') { carousel_params.behavior.circular = false; }
			
			var carousel = new Carousel($carousel, carousel_params);
			carousel.init();
			
		}

	})();
	
	
	/* ---------------------------------------------------------------------- */
	/*	Accordion
	/* ---------------------------------------------------------------------- */

	(function() {

		var $trigger = $('.accordion .toggle-trigger'),
			$container = $('.accordion .toggle-container');
			
		$container.stop(true,true).hide();
		$('.accordion .toggle-trigger.active').next().show();

		$trigger.on('click', function(e) {
			e.preventDefault();
			var $this = $(this);
			if ($this.next().is(':hidden')) {
				$this.siblings('.toggle-trigger').removeClass('active').next().slideUp(300);
				$this.toggleClass('active').next().slideDown(300);
			}
			return false; // IE9 hack
		});
		
	})();
	
	
	/* ---------------------------------------------------------------------- */
	/*	Toggle
	/* ---------------------------------------------------------------------- */

	(function() {

		var $trigger = $('.toggle .toggle-trigger'),
			$container = $('.toggle .toggle-container');
			
		$container.stop(true,true).hide();
		$('.toggle .toggle-trigger.active').next().show();

		$trigger.on('click', function(e) {
			e.preventDefault();
			var $this = $(this);
			$this.toggleClass('active');
			if ($this.next().is(':hidden')) {
				$this.next().slideDown(300);
			} else {
				$this.next().slideUp(300);
			}
			return false; // IE9 hack
		});
	})();
	
	
	/* ---------------------------------------------------------------------- */
	/*	Tabs
	/* ---------------------------------------------------------------------- */
	
	(function() {

		var $tabsNav = $('.tabs-nav'),
			$tabsNavLis = $tabsNav.children('li'),
			$tabContent = $('.tab-content');

		$tabsNav.each(function() {
			var $this = $(this);
			$this.next().children('.tab-content').stop(true,true).hide();
			if ($this.children('li').hasClass('active')) {
				var $li_active = $this.children('li.active');
				$li_active.parent().next().children('.tab-content').siblings( $li_active.find('a').attr('href') ).show();
			} else {
				$this.next().children('.tab-content').first().show();
				$this.children('li').first().addClass('active').stop(true,true).show();
			}
			// for sidebar tabs (if the browser window width is 768px and higher)
			if ($this.parent().parent().is('#sidebar') && $this.children('li').css('padding-right') == '0px') {
				$this.children('li.active').prev().find('a').addClass('border-right-colored');
			}
		});

		$tabsNavLis.on('click', function(e) {
			e.preventDefault();
			var $this = $(this);
			if ($this.not('.active')) {
				$this.siblings().removeClass('active').end().addClass('active');
				$this.parent().next().children('.tab-content').stop(true,true).hide()
															.siblings( $this.find('a').attr('href') ).show(); // or fadeIn()
			}
			// for sidebar tabs (if the browser window width is 768px and higher)
			if ($this.parent().parent().parent().is('#sidebar') && $this.css('padding-right') == '0px') {
				$this.siblings().find('a').removeClass('border-right-colored');
				$this.prev().find('a').addClass('border-right-colored');
			}
			return false; // IE9 hack
		});

	})();
	
	
	/* ---------------------------------------------------------------------- */
	/*	Message Boxes
	/* ---------------------------------------------------------------------- */
	
	(function() {
		
		window.setMsgBoxClosable = function (element) {
			var msgBox = $(element),
				closeBtn = $('<a class="close" href="#"></a>');
			
			closeBtn.appendTo(element);
			closeBtn.click(function() {
				msgBox.fadeTo(300, 0, function() {
					msgBox.animate({height: 0, padding: 0, margin: 0}, 300);
				});
				if ($('html').hasClass('ie8')) {
					closeBtn.fadeOut(300); // IE8 hack
				}
				return false;
			});
		};
		
		$('.message-box.closable').each(function() {
			setMsgBoxClosable(this);
		});
	
	})();
	
	
	/* ---------------------------------------------------------------------- */
	/*	Add iframe with YouTube/Vimeo player to a preview of the video type
	/*	(for small-screen mobile devices)
	/* ---------------------------------------------------------------------- */
	
	(function() {
	
		function getYouTubeParam(name, url) {
			name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
			var regexS = "[\\?&]"+name+"=([^&#]*)",
				regex = new RegExp( regexS ),
				results = regex.exec( url );
			return ( results == null ) ? "" : results[1];
		}
	
		// -- Add iframe with youtube player
		$('.item-picture[data-type="youtube-video"], .video-preview[data-type="youtube-video"]').each(function() {
			// regular youtube link
			var movie_id = getYouTubeParam('v', $('a', this).attr('href'));
			// youtu.be link
			if (movie_id == "") {
				movie_id = $('a', this).attr('href').split('youtu.be/index.html');
				movie_id = movie_id[1];
				if (movie_id.indexOf('?') > 0) {
					movie_id = movie_id.substr(0, movie_id.indexOf('?')); // strip anything after the ?
				}
				if (movie_id.indexOf('&') > 0) {
					movie_id = movie_id.substr(0, movie_id.indexOf('&')); // strip anything after the &
				}
			}
			$('<iframe>', {src: 'http://www.youtube.com/embed/'+movie_id+'?wmode=transparent&amp;rel=0&amp;showinfo=0', frameborder: '0'}).appendTo(this);
		});
			
		// -- Add iframe with vimeo player
		$('.item-picture[data-type="vimeo-video"], .video-preview[data-type="vimeo-video"]').each(function() {
			var movie_id = $('a', this).attr('href'),
				regExp = /http:\/\/(www\.)?vimeo.com\/(\d+)/,
				match = movie_id.match(regExp);
			$('<iframe>', {src: 'http://player.vimeo.com/video/'+match[2]+'?title=0&amp;byline=0&amp;portrait=0', frameborder: '0'}).appendTo(this);
		});
		
	})();
	
	
	/* ---------------------------------------------------------------------- */
	/*	HTML5 Video Resizing
	/* ---------------------------------------------------------------------- */
	
	(function() {
		
		var resizeContainer = function() {
			$('.html5-video-container').each(function() {
				var containerWidth = $(this).parent().width(),
					containerHeight,
					aspectRatio = $(this).attr('data-aspect-ratio');
					
				containerHeight = Math.floor(containerWidth/aspectRatio);
				$(this).css({'width': containerWidth + 'px', 'height': containerHeight + 'px'});
			});
		};
		
		resizeContainer();
		
		// Window resize event
		$(window).on('resize', function() {
			var timer = window.setTimeout(function() {
				window.clearTimeout(timer);
				resizeContainer();
			}, 30);
		});
		
	})();
	
	/* ---------------------------------------------------------------------- */
	/*	4 Column Gallery
	/* ---------------------------------------------------------------------- */
	
	(function() {
		
		var setGalleryItemHeight = function() {
			
			$('.gallery-wrapper.four-cols').each(function() {
				var imageHeight = $('.one-fourth.columns.gallery-item', this).height();
				
				if ($(window).width() >= 768) {
					if (imageHeight > 0) { $('.one-half.columns.gallery-item', this).css('height', imageHeight + 'px'); }
				} else {
					$('.one-half.columns.gallery-item', this).css('height', '');
				}
			});
			
		};
		
		setGalleryItemHeight();
		
		// Window load event
		$(window).load(function() {
			setGalleryItemHeight();
		});
		
		// Window resize event
		$(window).on('resize', function() {
			var timer = window.setTimeout(function() {
				window.clearTimeout(timer);
				setGalleryItemHeight();
			}, 30);
		});
		
	})();
	
	
	/* ---------------------------------------------------------------------- */
	/*	IE8 correction
	/* ---------------------------------------------------------------------- */
	
	(function() {
		
		$('.ie8 .slider-caption *:last-child').css('margin-bottom', '0');
		$('.ie8 .brief-nav li:last-child').css('padding-right', '0');
		$('.ie8 .breadcrumb-nav li:last-child').css('padding-right', '0');
		$('.ie8 #subheader-bar .sub-nav li:last-child').css('margin-right', '0');
		$('.ie8 .feature-boxes.left-icon-box header + p:last-child').css('margin-bottom', '0');
		$('.ie8 .feature-boxes.left-icon-box.small-icon.number-type article > div > *:last-child').css('margin-bottom', '0');
		$('.ie8 #portfolio-filter li:last-child').css('padding-right', '0');
		$('.ie8 .single-item-details .extra-content #portfolio-wrapper .portfolio-item-preview:last-child').css('margin-bottom', '0');
		$('.ie8 #footer-bottom .footer-nav li:last-child a').css('padding-right', '0');
		$('.ie8 .blog .post-meta > span:last-child').css('margin-right', '0');
		$('.ie8 .blog .post-meta.slash-separated > span:last-child').css('padding-right', '0');
		$('.ie8 .tabs-nav li:last-child').css('padding-right', '0');
		$('.ie8 .tweets .tweet_even:last-child, .ie8 .tweets .tweet_odd:last-child').css('margin-bottom', '0');
		$('.ie8 .social-icons li:last-child, .ie8 .social-icons.round li:last-child').css('margin-right', '0');
		$('.ie8 .social-icons.small-size li:last-child, .ie8 .social-icons.small-size.round li:last-child').css('margin-right', '0');
		$('.ie8 ul.feature-nav.inline li:last-child').css('margin-right', '0');
		$('.ie8 ul.social-share li:last-child').css('margin-right', '0');
		
	})();
	
	/* ---------------------------------------------------------------------- */
	/*	Pricing Tables
	/* ---------------------------------------------------------------------- */
	
	(function() {
	
		$('html:not(.ie8) .pricing-table .table-column.featured').next().find('.header, .features, .footer').css('border-left', 'none');
		$('.ie8 .pricing-table .table-column .features').find('li:odd').css('background-color', '#f7f7f7');
		
	})();
	
	/* ---------------------------------------------------------------------- */
	/*	Google Maps
	/* ---------------------------------------------------------------------- */
	
	(function() {
	
		var $gmap = $('#map');

		if ($gmap.length) {
			
			// posType: "coordinates" - use geographical coordinates (latitude and longitude),
			//          "address" - use geographical address
			
			var posType = 'address',
				address = '1730 San Antonio Ave, Alameda, CA 94501', // map and marker address
				mapCoords = {lat: 37.7668, lng: -122.2579}, // map coordinates
				markerCoords = {lat: 37.7668, lng: -122.2579}, // marker coordinates
				mapZoom = 15,
				mapScrollwheel = false,
				infoTitle = 'Some title goes here..',
				infoString = '<h5 class="gm-title">ABC Ipsum Studios</h5><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>',
				infoMaxWidth = 250,
				mapPosition,
				markerPosition;
			
			// If needed, you can use 2 or more google maps (with separate parameters) on different pages
			// by setting the value of gm_params object in an html file
			if (typeof gm_params != 'undefined') {
				if (gm_params.posType) { posType = gm_params.posType; }
				if (gm_params.address) { address = gm_params.address; }
				if (gm_params.mapCoords) { mapCoords = {lat: gm_params.mapCoords.lat, lng: gm_params.mapCoords.lng}; }
				if (gm_params.markerCoords) { markerCoords = {lat: gm_params.markerCoords.lat, lng: gm_params.markerCoords.lng}; }
				if (gm_params.infoTitle) { infoTitle = gm_params.infoTitle; }
				if (gm_params.infoString) { infoString = gm_params.infoString; }
			}
			
			var initialize = function() {
				
				var map,
					mapOptions = {
						zoom: mapZoom,
						center: mapPosition,
						backgroundColor: '#ffffff',
						mapTypeId: google.maps.MapTypeId.ROADMAP,
						scrollwheel: mapScrollwheel
					};
				map = new google.maps.Map(document.getElementById('map'), mapOptions);
				
				var marker = new google.maps.Marker({
					position: markerPosition,
					map: map,
					title: infoTitle
				});
				
				var infowindow = new google.maps.InfoWindow({
					content: infoString,
					maxWidth: infoMaxWidth
				});
				
				google.maps.event.addListener(marker, 'click', function() {
					infowindow.open(map, marker);
				});
				
				// Window resize event
				$(window).on('resize', function() {
					var timer = window.setTimeout(function() {
						window.clearTimeout(timer);
						map.panTo(marker.getPosition()); // pan back to the marker
					}, 30);
				});
			};
			
			google.maps.event.addDomListener(window, 'load', function(results, status) {
				if (posType == 'coordinates') {
					mapPosition = new google.maps.LatLng(mapCoords.lat, mapCoords.lng);
					markerPosition = new google.maps.LatLng(markerCoords.lat, markerCoords.lng);
					initialize();
				}
				if (posType == 'address') {
					geocoder = new google.maps.Geocoder();
					geocoder.geocode({'address': address}, function(results, status) {
						if (status == google.maps.GeocoderStatus.OK) {
							mapPosition = markerPosition = results[0].geometry.location;
							initialize();
						} else {
							$gmap.text('Geocode was not successful for the following reason: '+status);
						}
					});
				}
			});
		}
		
	})();
	
	
	/* ---------------------------------------------------------------------- */
	/*	Blog Post Comments
	/* ---------------------------------------------------------------------- */
	
	(function() {
		
		var $commentReplyLink = $('.blog #comments .comment article a.reply'),
			$messageField = $('.blog #comment-form textarea[name="message"]');
			
		$commentReplyLink.on('click', function(e) {
			e.preventDefault();
			
			var $this = $(this),
				author = $this.parent().find('h5, h6, .title, strong').text(),
				date = $this.parent().find('.date').text();
				
			$messageField.focus().val('').val('Reply to: ' + author + ' (posted on ' + date + ')\n\n');
			
			// scroll to the top of the reply form section
			var topDiff = $('.blog #submit-comment').offset().top - $(window).height();
			if (topDiff > 0) {
				$('html, body').animate({ scrollTop: $('.blog #submit-comment').offset().top});
			}
			
			return false; // IE9 hack
		});
		
	})();
	
	
	/* ---------------------------------------------------------------------- */
	/*	Contact/Comment Form
	/* ---------------------------------------------------------------------- */
	
	(function() {
		
		var $form = $('#contact-form, #comment-form');
		
		if ($form.length) {
			var $loader = $('<img>', {src: 'images/icons/ajax-loader.gif', width: '16', height: '11', alt: 'Loading...'})
						.appendTo('#submit-button', $form).hide(),
				$messageBox = $('<div class="message-box short">').appendTo($form).hide(),
				success_msg,
				error_msg1,
				error_msg2;
			
			// Success and error notification messages for contact form
			if ($form.attr('id') == 'contact-form') {
				success_msg = 'Your message has been sent. Thank you!';
				error_msg1 = 'There was an error sending the email! Please try again later.';
				error_msg2 = 'Sorry, unexpected error. Please try again later.';
			}
			
			// Success and error notification messages for comment form
			if ($form.attr('id') == 'comment-form') {
				success_msg = 'Your comment has been sent and is awaiting moderation. Thank you!';
				error_msg1 = 'There was an error sending the comment! Please try again later.';
				error_msg2 = 'Sorry, unexpected error. Please try again later.';
			}
			
			$form.on('click', 'input[type="submit"]', function(e) {
				e.preventDefault();
				var hasError = false;
				
				// reset error notifications, hide loader and message box
				$form.find('input, textarea, select').removeClass('error').siblings('label').find('span').removeClass('error');
				$loader.hide();
				$messageBox.hide();
				
				$form.find('input[type="text"], input[type="email"], input[type="checkbox"], textarea, select').each(function() {
					var $this = $(this),
						fieldValue = $.trim($this.val());
					
					if ($this.attr('required')) {
						
						// check if the checkbox is checked
						if ($this.attr('type') == 'checkbox' && $this.is(':checked') == false) {
							hasError = true;
						}
						
						// check if the field has an empty value
						else if (fieldValue == '' || fieldValue.length < 2) {
							$this.addClass('error');
							hasError = true;
						}
					}
					
					// email address validation
					if ($this.attr('type') == 'email' && fieldValue.length > 0) {
						// regex - http://fightingforalostcause.net/misc/2006/compare-email-regex.php
						var regex=/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
						if (!regex.test(fieldValue)) {
							$this.addClass('error');
							hasError = true;
						}
					}
				});
				
				// AJAX request 
				if (!hasError) {
					var localDate = new Date(),
						localTimezoneOffset = localDate.getTimezoneOffset(), // in minutes
						form_data = $form.serialize() + '&timezone_offset=' + localTimezoneOffset;
					
					if ($form.attr('id') == 'comment-form') { // for comment form only
						var postTitle = $('.blog .single-post').find('h2.title, h3.title').text(),
							postDay = $('.blog .single-post .post-date').find('.day').text(),
							postMonth = $('.blog .single-post .post-date').find('.month').text(),
							postYear = $('.blog .single-post .post-date').find('.year').text(),
							postDate = postDay + ' ' + postMonth + ' ' + postYear;
						if (!(postDay&&postMonth&&postYear)) {
							postDate = $('.blog .single-post #post-date').text().replace('|', '');
						}
						form_data += '&post_title=' + postTitle + '&post_date=' + postDate;
					}
					
					$loader.show();
					
					var request = $.post($form.attr('action'), form_data, function(data) {
						$loader.hide();
						if (data.indexOf('success') !== -1) {
							showMessageBox(success_msg, 'success');
							$form.find('input[type="text"], input[type="email"], textarea, select').val('').end()
								.find('input[type="checkbox"]').attr('checked', false);
						} else if (data.indexOf('error') !== -1) {
							showMessageBox(error_msg1, 'error');
						} else {
							showMessageBox(error_msg2, 'error');
						}
					})
					.fail(function() {
						$loader.hide();
						showMessageBox(error_msg2, 'error');
					});
				}
				
				return false; // IE9 hack
				
			});
			
		}
		
		function showMessageBox(msg, type) {
			$messageBox.html('<p>'+msg+'</p>').removeClass('success error').addClass(type).show();
			
			// scroll to the bottom of the form to show a notification message
			var bottomDiff = $form.offset().top + $form.outerHeight() - $(window).height();
			if ($(document).scrollTop() < bottomDiff) {
				$('html, body').animate({ scrollTop: bottomDiff});
			}
		}
	
	})();
	
	
	/* ---------------------------------------------------------------------- */
	/*	Subscription Form
	/* ---------------------------------------------------------------------- */
	
	(function() {
		
		var $form = $('#subscription-form');
		
		if ($form.length) {
			var $emailField = $('input[type="email"]', $form),
				$messageBox = $('<div class="footer-message">').appendTo($form.parent()).hide(),
				info_msg = 'Enter your email address',
				success_msg = 'Your email address has been added to our newsletter mailing list.',
				warning_msg1 = 'Please enter the valid email address.',
				warning_msg2 = 'Sending... please wait',
				error_msg1 = 'There was an error sending the email! Please try again later.',
				error_msg2 = 'Sorry, unexpected error. Please try again later.';
			
			$emailField.val(info_msg);
			$emailField.on('blur', function() {
				if (this.value == '') { this.value = info_msg; }
			});
			$emailField.on('focus', function() {
				if (this.value == info_msg) { this.value = ''; }
			});
			
			$form.on('click', 'input[type="submit"]', function(e) {
				e.preventDefault();
				var hasError = false,
					fieldValue = $.trim($emailField.val());
				
				// reset error notification and hide message box
				$emailField.removeClass('error');
				$messageBox.hide();
				
				// check if the field has an empty value
				if ($emailField.attr('required')) {
					if (fieldValue == '' || fieldValue.length < 2) {
						$emailField.addClass('error');
						hasError = true;
					}
				}
				
				// email address validation
				if (fieldValue.length > 0) {
					// regex - http://fightingforalostcause.net/misc/2006/compare-email-regex.php
					var regex=/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
					if (!regex.test(fieldValue)) {
						$emailField.addClass('error');
						if (fieldValue != info_msg) { showMessageBox(warning_msg1, 'info'); }
						hasError = true;
					}
				}
				
				// AJAX request 
				if (!hasError) {
					var localDate = new Date(),
						localTimezoneOffset = localDate.getTimezoneOffset(), // in minutes
						form_data = $form.serialize() + '&timezone_offset=' + localTimezoneOffset;
					
					showMessageBox(warning_msg2, 'info');
					
					var request = $.post($form.attr('action'), form_data, function(data) {
						if (data.indexOf('success') !== -1) {
							showMessageBox(success_msg, 'info');
							$emailField.val('');
						} else if (data.indexOf('error') !== -1) {
							showMessageBox(error_msg1, 'error');
						} else {
							showMessageBox(error_msg2, 'error');
						}
					})
					.fail(function() {
						showMessageBox(error_msg2, 'error');
					});
				}
				
				return false; // IE9 hack
				
			});
			
		}
		
		function showMessageBox(msg, type) {
			$messageBox.html(msg).removeClass('info error').addClass(type).show();
			if (type == 'error') {
				$emailField.addClass('error');
			}
		}
	
	})();
	
});
