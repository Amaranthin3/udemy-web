// If age is Negetive 

var age=parseInt(prompt("How old are you?"), 10);
// var age=prompt("How old are you?");
// age=parseInt(age,10);
if(age <= 0){
	console.log("Invalid Age");
}

// If Age is 21 Print Happy Birthday
// Convert the string "21" to a number using a number constructor - parseInt

var age=prompt("How old are you?");
age=parseInt(age,10);
if(age===21){
	console.log("Happy 21st Birthday!");
}

// If age is odd

var age=prompt("How old are you?");
age=parseInt(age,10);
if((age%2)===1){
	console.log("Your age is odd!");
}

//Age is a perfect square

var age=prompt("How old are you?");
age=parseInt(age,10);
if(age % Math.sqrt(age)===0){
	console.log("Perfect Square!");
}

