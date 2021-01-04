//push to add to the end of an array
var colors = ["blue", "red", "green"];
colors.push("pink");

//pop to remove last entry of an array
var colors = ["blue", "red", "green"];
colors.pop();

//unshift to add to the front of an array
var colors = ["blue", "red", "green"];
colors.unshift ("violet")

//shift removes first item of an array
var colors = ["blue", "red", "green"];
colors.shift ();

//indexOf to find the index of an item in an array
var colors = ["blue", "red", "green"];
colors.indexOf("red");

//slice() to copy parts of an array 

//copy second and and third fruit
//this does not alter original array
var fruits = ["Banana", "Lemon", "Apple", "Orange"];
var citrus = fruits.slice (1,3);

//use slice() to copy an entire array
var nums = [1,2,3,4];
var otherNums = num.slice();