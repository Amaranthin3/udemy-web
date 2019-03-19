//Looping through the containers to assign colors.
var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)",
]
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor;
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

//Color picked must update with the colorDisplay
colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];

//Looping through to include click listeners to squares
//Grab clickedColor
//Compare clickedColor to pickedColor
//If clicked wrong the square fades to background
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;

		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
		} else {
			this.style.background = "#2F2C2B";
			messageDisplay.textContent = "Try Again!";
		}
	});
}

//Change each color to match the given color
function changeColors(color){
	for (var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
}

//Randomize numbers and pick them
//Math Floor chops of decimal attachment. 
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}