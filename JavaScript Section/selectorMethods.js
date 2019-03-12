//getElementById
//Takes a string argument and returns the one element with the ID
var tag = document.getElementById("highlight");
console.dir(tag)

//getElementsByClassName 
//Takes a string argument and returns a list of elements with the class
var tags = document.getElementsByClassName("bolded"); 

//getElementsByTagName
//returns elements by given tag name. <li> <h1>
var tags = document.getElementsByTagName("li");

//querySelector
//returns the first element that matches a given CSS-style selector 
var tag = document.querySelector("#highlight");

//querySelectorAll
//returns a list that matches a given CSS-style selector
var tag = document.querySelectorAll("h1");