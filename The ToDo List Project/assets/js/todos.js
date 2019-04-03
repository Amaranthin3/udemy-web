//Check off todos by clicking 
//$("li") only adds for current Li's and not future. Use Ul. 
//Include all commands in an object

//Toggle from gray to black.
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on X to Delete todo. Delete Li. 
//Take note of event bubbling. Span will trigger LI, UL, Div etc. 
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//Creating new todos
//Listening for the Enter key
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//Grabbing new text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new LI and add to UL
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
	}
});

$("#toggle").click(function(){
	("input[type='text']").fadeToggle();
});