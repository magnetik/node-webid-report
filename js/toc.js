function generateTOC() {
	$("h1, h2, h3").each(function(i) {
		var current = $(this);
		current.attr("id", "title" + i);
		$("#toc").append("<a id='link" + i + "' href='#title" +
			i + "' title='" + current.prop('tagName') + "'>" + 
			current.html() + "</a>");
	});
	$("#toc").prepend("<h1>Table of content</h1>");
}