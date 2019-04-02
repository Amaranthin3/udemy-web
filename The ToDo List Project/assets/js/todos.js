//Check off todos by clicking 
//console.log($(this).css("color")); -- check color 
//Include all commands in an object

//Toggle from gray to black.
$("li").click(function(){
	$(this).toggleClass("completed");
});

//Click on X to Delete todo. Delete Li. 
//Take note of event bubbling. Span will trigger LI, UL, Div etc. 
$("span").click(function(e){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

