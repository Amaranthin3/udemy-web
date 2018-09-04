// Create secretNumber 
var secretNumber= 4;
// Ask user for guess
var guess= parseInt(prompt("Guess a number"), 10);

//Check if guess is right
if (guess === secretNumber) {
	alert("YOU GOT IT RIGHT!");
}
//Otherwise check if higher otherwise check if lower
else if (guess > secretNumber){
	alert("Too High! Guess again!")
}

else {
	alert("Too Low! Guess Again");
}
