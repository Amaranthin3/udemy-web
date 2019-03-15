//Select the Player one + two button the score increments 
//If gameOver is false keep incrementing 
//If score is equal to winningScore. Game Over. 
var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var numGames = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function(){
	if (!gameOver) {
		p1Score++;
		if (p1Score === winningScore){
			p1Display.classList.add("winner");
			gameOver = true;
		}
		p1Display.textContent = p1Score;	
	}
});

p2Button.addEventListener("click", function(){
	if (!gameOver) {
		p2Score++;
		if (p2Score === winningScore){
			p2Display.classList.add("winner");
			gameOver = true;
		}
		p2Display.textContent = p2Score;	
	}
});

//Reset Both p1 and p2 scores once GameOver is true

resetButton.addEventListener("click", function(){
	reset();
});

//Input a value and the no. games change
//numGames will reflect what value numInput is
//numInput.value is returning a string unless parseInt
//reset is added for when a player changes input midway

numInput.addEventListener("change", function(){
	numGames.textContent = numInput.value
	winningScore = parseInt(numInput.value);
	reset();
});

function reset(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false; 
}