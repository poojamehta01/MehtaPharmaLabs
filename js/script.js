/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */
console.log("Script is running");
document.addEventListener('DOMContentLoaded', function () {
	(function ($) {


		'use strict';
		// navbarDropdown
		if ($(window).width() < 992) {
			$('.navigation .dropdown-toggle').on('click', function () {
				$(this).siblings('.dropdown-menu').animate({
					height: 'toggle'
				}, 300);
			});
		}

		// scroll to top button
		$(window).on('scroll', function () {
			if ($(window).scrollTop() > 70) {
				$('.backtop').addClass('reveal');
			} else {
				$('.backtop').removeClass('reveal');
			}
		});
		// scroll-to-top
		$('.scroll-top-to').on('click', function () {
			$('body,html').animate({
				scrollTop: 0
			}, 500);
			return false;
		});


		$('.portfolio-single-slider').slick({
			infinite: true,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 2000
		});

		$('.brands-logo').slick({
			infinite: true,
			arrows: false,
			autoplay: true,
			slidesToShow: 6,
			slidesToScroll: 1,
			autoplaySpeed: 1000,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 6,
						slidesToScroll: 6,
						infinite: true,
						dots: true
					}
				},
				{
					breakpoint: 900,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 4
					}
				}, {
					breakpoint: 600,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 4
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				}

			]
		});

		$('.testimonial-wrap').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			dots: true,
			arrows: false,
			autoplay: true,
			vertical: true,
			verticalSwiping: true,
			autoplaySpeed: 6000,
			responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}, {
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}

			]
		});

		$('.testimonial-wrap-2').slick({
			slidesToShow: 2,
			slidesToScroll: 2,
			infinite: true,
			dots: true,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 6000,
			responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}, {
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}

			]
		});



		// counter
		function counter() {
			var oTop;
			if ($('.counter').length !== 0) {
				oTop = $('.counter').offset().top - window.innerHeight;
			}
			if ($(window).scrollTop() > oTop) {
				$('.counter').each(function () {
					var $this = $(this),
						countTo = $this.attr('data-count');
					$({
						countNum: $this.text()
					}).animate({
						countNum: countTo
					}, {
						duration: 500,
						easing: 'swing',
						step: function () {
							$this.text(Math.floor(this.countNum));
						},
						complete: function () {
							$this.text(this.countNum);
						}
					});
				});
			}
		}
		$(window).on('scroll', function () {
			counter();
		});


		// Shuffle js filter and masonry
		if ($('.shuffle-wrapper').length !== 0) {
			var Shuffle = window.Shuffle;
			var jQuery = window.jQuery;

			var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
				itemSelector: '.shuffle-item',
				buffer: 1
			});
			jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
				var input = evt.currentTarget;
				if (input.checked) {
					myShuffle.filter(input.value);
				}
			});
		}


	}
	)(jQuery);
	// Load header content using JavaScript fetch
	fetch('header.html')
		.then(response => response.text())
		.then(data => {
			document.getElementById('header-container').innerHTML = data;
		});

	// Load footer content using JavaScript fetch
	fetch('footer.html')
		.then(response => response.text())
		.then(data => {
			document.getElementById('footer-container').innerHTML = data;
		});

	function setActiveLink() {
		// Get the current location
		const currentLocation = window.location.pathname;

		// Get all navigation items (including dropdowns)
		const navigationItems = document.querySelectorAll('.nav-item');


		// Loop through the items and find the one with a matching href
		for (const item of navigationItems) {

			const link = item.querySelector('.nav-link');
			if (!link) {
				continue; // Skip items without a link
			}

			const linkHref = link.getAttribute('href');

			// Normalize linkHref and currentLocation to remove trailing slashes
			const normalizedCurrentLocation = currentLocation.replace(/^\/|\/$/g, ''); // Remove leading and trailing slashes
			const normalizedLinkHref = linkHref ? linkHref.replace(/^\/|\/$/g, '') : null; // Remove leading and trailing slashes

			if (normalizedCurrentLocation === normalizedLinkHref) {
				// Remove "active" class from all navigation items
				navigationItems.forEach(otherItem => {
					otherItem.classList.remove('active');
				});

				// Add "active" class to the selected item
				item.classList.add('active');

				break; // Exit the loop after setting one "active" class
			} else if (normalizedLinkHref === null && item.classList.contains('dropdown')) {
				// For dropdown items, add "active" class
				item.classList.add('active');
			}
		}
	}

	// Fetch the header content and set the active link
	fetch('header.html')
		.then(response => response.text())
		.then(data => {
			document.getElementById('header-container').innerHTML = data;

			// Call setActiveLink with the current location (e.g., "/index.html")
			setActiveLink();
		});

	var map = L.map('map').setView([latitude, longitude], 15);
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: 'Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
	L.marker([latitude, longitude]).addTo(map)
		.bindPopup('Your Location')
		.openPopup();

});

