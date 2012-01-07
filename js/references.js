function generateReference() {
	$("aside").each(function(i) {
		var current=$(this);
		$("#listRef").append("<p>[" + (i+1) + "] " + current.html() + "</p>");
		current.html("[" + (i+1) +"]");
	});
}