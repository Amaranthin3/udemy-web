//jQuery Effects Demo

//fadeOut Effect
//Will remove div from the DOM AFTER the fade has completed
$("button").on("click", function(){
	$("div").fadeOut(1000, function(){
		$(this).remove();
	});
});

// //fadeIn Effect
// //Set Display to be none in CSS Div Container
$("button").on("click", function(){
	$("div").fadeIn(1000, function(){
	});
});

//fadeToggle
$("button").on("click", function(){
	$("div").fadeToggle(1000, function(){
	});
});

//slideDown Effect
$("button").on("click", function(){
	$("div").slideDown();
});

//slideToggle Effect
$("button").on("click", function(){
	$("div").slideToggle(1000, function(){
		$(this).remove();
	});
});