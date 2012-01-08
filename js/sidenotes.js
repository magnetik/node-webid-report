/* CODE FROM : http://www.cssnewbie.com/generating-automatic-website-footnotes-with-jquery/
 * AND : http://www.jankoatwarpspeed.com/post/2009/08/20/Table-of-contents-using-jQuery.aspx
 * With some modifications 
 * Baptiste Lafontaine (http://magnetik.org)
 */
 
function generateSideNotes() {
	$("span[title],span[cite],q[cite],q[title],blockquote[cite],blockquote[title]").addClass("footnote");
	$(".footnote").each(function(i) {
		var current = $(this);
		var text = "";
		
		var topPos = current.position().top;
		var leftPos = $("#page").position().left + $("#page").width() + 70;
		
		var cite = current.attr("cite");
		var title = current.attr("title");
		
		if(title && cite) {
			text+="<a href=\""+cite+"\">"+title+"</a>";
		} else if(title) {
			text+=title;
		} else if(cite) {
			text+="<a href=\""+cite+"\">"+cite+"</a>";
		}
		
		current.append("<sup>" + (i+1) + "</sup>");
		$("body").append("<div id='sidenote" + i + "'>" + text + "</div>");
		
		// Ajust position
		$("#sidenote" + i).css("left", leftPos); 
		$("#sidenote" + i).css("top", topPos); 
		
	});
}