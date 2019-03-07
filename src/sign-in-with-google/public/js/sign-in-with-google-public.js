/**
 * All of the code for your public-facing JavaScript source
 * should reside in this file.
 *
 * @package Sign In With Google
 */

(function( $ ) {
	'use strict';

	/**
	 * Note: It has been assumed you will write jQuery code here, so the
	 * $ function reference has been prepared for usage within the scope
	 * of this function.
	 *
	 * This enables you to define handlers, for when the DOM is ready:
	 *
	 * $(function() {
	 *
	 * });
	 *
	 * When the window is loaded:
	 *
	 * $( window ).load(function() {
	 *
	 * });
	 *
	 * ...and/or other possibilities.
	 *
	 * Ideally, it is not considered best practise to attach more than a
	 * single DOM-ready or window-load handler for a particular page.
	 * Although scripts in the WordPress core, Plugins and Themes may be
	 * practising this, we should strive to set a better example in our own work.
	 */

	$( function() {
		$('#sign-in-with-google').on('click', function(event) {
			console.log(screen);
			event.preventDefault();
			var height = 550;
			var width = 500;
			var left = (screen.width/2)-(width/2);
			var top = (screen.height/2)-(height/2);
			var authWindow = window.open( siwg.redirect_url, 'authWindow', 'width='+width+',height='+height+',top='+top+',left='+left );
			return false;
		});
	});

})( jQuery );
