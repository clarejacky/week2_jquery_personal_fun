
$(document).ready(function (){
	$("#generate").on("click", function(){
		$(this).fadeIn(100).fadeOut(100).fadeIn(100);
		
		var el = "<li id='mantraId'>You're ok</li>"
		$("#mantra").append(el);
		el = $("#mantra").children().last();
		el.hide().slideDown();

	});

	$("#generate").on("mouseenter", function (){
		$(this).css({"background-color": "yellow"});
		$(this).css({"width": "450px"});
		$(this).text("Click Here");
		
	});
	$("#generate").on("mouseleave", function (){
		$(this).css({"background-color": "#7FFFD4"});
		$(this).css({"width": "350px"});
		$(this).text("Today will be fine");
		
	});

});
