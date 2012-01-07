function autoNumerationCaption() {
	$('figcaption').each(function(index) {
		var current = $(this);
		current.prepend("<strong>Figure " + (i+1) +"</strong>
	});
}