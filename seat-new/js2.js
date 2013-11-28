window.onload = function(){
	(function(){
		var keys = $(".seat-map-keys").first(),
			text = $(".seat-map-invocation").first(),
			links = $(".seat-map-footer-links").first(),
			infoBox = $("#flight-list-infobox");
		text.after(keys);
		infoBox.append(links);

		$(".seat-map-flights-list").each(function(){
			$(this).html("<span class='seat-map-text-info'>M&aacute;s informaci&oacute;n de este vuelo</span>");

		});
	})();
}