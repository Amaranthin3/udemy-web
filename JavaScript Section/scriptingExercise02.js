// If age is Negetive 

var age=Number(prompt("How old are you?"));
if(age <= 0){
	console.log("Invalid Age");
}

// If Age is 21 Print Happy Birthday
// Convert the string "21" to a number using a number constructor

var age=Number(prompt("How old are you?"));
if(age===21){
	console.log("Happy 21st Birthday!");
}

// If age is odd

var age=Number(prompt("How old are you?"));
if((age%2)===1){
	console.log("Your age is odd!");
}

//Age is a perfect square

var age=Number(prompt("How old are you?"));
if(age % Math.sqrt(age)===0){
	console.log("Perfect Square!");
}

