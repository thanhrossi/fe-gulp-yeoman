/*******************************************************************************

	CSS on Sails Framework
	Title: Robot Magic
	Author: XHTMLized.com
	Date: October 2013	

*******************************************************************************/

(function($) {

	var App = {

		/**
		 * Init Function
		 */
		init: function() {
			App.homeSlider();
			App.menuToggle();
		},
		
		/**
		 * Home slider
		 */
		homeSlider: function() {
			$('.flexslider').flexslider({
				animation: "fade",
				itemWidth: 980
			});
		},

		/**
		 * Menu Toggle
		 */
		menuToggle: function() {
			$('.menu-toggle').on('click', function(){
				$('.main-nav').toggleClass('menu-nav-open');
				$(this).toggleClass('menu-toggle-close');
			})
		}
	}
	
	$(function() {
		App.init();
	});

})(jQuery);