//For Loop
//Looping over an array we need to use the arrays length property  
var colors =["red", "orange", "blue", "green"];
//for when i is less than the array (4) and starts at 0. Adds one to the loop. 
for (var i = 0; i <colors.length; i++) {
	console.log(colors[i]);
}

//ForEach
//Built-in way for iterationg over an array
//color is a placeholder. Use anything
var colors =["red", "orange", "blue", "green"];
colors.forEach(function(color){
	console.log(color);
});

//what will print out? 

//color throws you off. 
//number is evenly divisable by 3. Returns 3, 6, 9 
var numbers = [1,2,3,4,5,6,7,8,9,10];
var colors = ["red", "orange", "yellow", "green"];

numbers.forEach(function(color){
	if(color % 3 === 0){
		console.log(color);
	}
});
