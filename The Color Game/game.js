//Variables 
var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");

//Color picked must update with the colorDisplay
colorDisplay.textContent = pickedColor;

//Looping through the containers to assign colors.
var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)",
]

for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];

//Looping through to include click listeners to squares
//Grab clickedColor
//Compare clickedColor to pickedColor
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;

		if(clickedColor === pickedColor){
			alert("Correct");
		} else {
			alert("Wrong");
		}
	});
};


