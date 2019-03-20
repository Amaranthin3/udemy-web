var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

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
			resetButton.textContent ="Play Again?";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
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

//Make an array. Add num random colors to the array
//Get random color and push into the array
//Return that array
function generateRandomColors(num){
	var arr = []
	for (var i=0; i < num; i++){
		arr.push(randomColor())
	}
	return arr;
}

//Pick red, green and blue from 0 to 255
function randomColor(){
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}

//Generate all new colors 
//Pick a new random color from the array
//Change colorDisplay to match picked color 
//Change color of squares 
resetButton.addEventListener("click", function(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
});

//Highlighting the Easy and Hard Buttons
//Looping through all squares and changing only 3 colors. 
easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display= "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
		squares[i].style.display= "block";
	}
});