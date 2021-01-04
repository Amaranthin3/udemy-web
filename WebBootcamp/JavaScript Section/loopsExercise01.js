// Print all numbers between -10 and 19
var num = -10;
while (num <= 19) {
	console.log(num);
	num++;
}

//Print all even numbers between 10 and 40
var num = 10;
while (num <= 40) {
	console.log(num);
	num+=2;
}

//Alternative method that will always print out even regardless of where you start. 
//All numbers are equally divided by 2 then +1
var num = 10;
while (num <= 40) {
	if (num % 2 === 0) {
		console.log(num);
	}
	num+=1;
}

//Print all odd numbers between 300 and 333
//Not divisible by 2
var num = 300;
while (num <= 333) {
	if(num % 2 !=0) {
		console.log(num);
	}
	num+=1;
}

//Print numbers divisible by 5 and 3. Between 5 and 50.
var num = 5;
while (num <= 50) {
	if(num % 3 ===0 && num % 5 ===0) {
		console.log(num);
	}
	num+=1;
}
