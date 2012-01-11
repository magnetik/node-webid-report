function generateReference() {
	$("aside").each(function(i) {
		var o = i+1;
		var current = $(this);
		$("#listRef").append("<p id='ref" + o + "'>[" + o + "] " + current.html() + "</p>");
		current.html(" <a class='ref' href='#ref" + o +"'>#[" + o +"]</a> ");
	});
}
