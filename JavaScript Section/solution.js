//Write a fuction isEven which takes a numeric argument and returns 
//true if the number is even and false otherwise.

function isEven(num) {
	if (num % 2 === 0 ) {
		return true;
	} else {
		return false;
	}
}
//Refactoring
function isEven(num) {
	return num % 2 === 0;
}
//Write a function factorial() which takes a single numeric argument and 
//returns the factorial of that number. eg. 6! is 6x5x4x3x2x1 

function factorial(num) {
	var result = 1;
	for(var i=2; 1 <= num; i++){
		result *= i;
	}
}
//Write a function kebabToSnake() which takes a single kebab-cased string
//argument and returns the snake_cased version.
//Basically replacing characters in a string

function kebabToSnake(str) {
	var newStr = str.replace(/-/g, "_");
	return newStr;
}