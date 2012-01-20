/* CODE FROM : http://www.jankoatwarpspeed.com/post/2009/08/20/Table-of-contents-using-jQuery.aspx 
 * With some modifications 
 * Baptiste Lafontaine (http://magnetik.org)
 */
function generateTOC() {
	$("#page > h1, #page > h2").each(function(i) {
		var current = $(this);
		current.attr("id", "title" + i);
		$("#tocContent").append("<a id='link" + i + "' href='#title" +
			i + "' title='" + current.prop('tagName') + "'>" + 
			current.html() + "</a>");
	});

	$("#tocSlider").bind('click',function () {
		if ($("#tocTitle").text() == "TOC") {
			$("#tocContent").show('slow');
			$('#tocTitle').text("Table Of Content");
			$('#tocSlider').attr('src', 'img/reduce.png');
			$('#toc').animate({width: 200}, 'slow');

			$.cookie("toc", "expanded");
		}
		else {
			$("#tocContent").hide('slow');
			$('#toc').animate({width: 60}, 'slow');
			$('#tocTitle').text("TOC");
			$('#tocSlider').attr('src', 'img/expand.png');

			$.cookie("toc", "reduced");
		}
	});

	// Auto reduce if already reduced !
	if ($.cookie("toc") == "reduced") {
		alert("Reduced");
		$("#tocSlider").trigger('click');
	}
}