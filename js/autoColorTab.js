function autoColorTab() {
	$("td").each(function(i) {
		var current = $(this);
		switch (current.text()) {
			case "Yes":
				current.addClass("yes");
				break;
			case "No":
				current.addClass("no");
				break;
		}
	});
}