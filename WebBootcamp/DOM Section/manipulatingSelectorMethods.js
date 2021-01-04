//**********CLASSLIST****************
//Define a class in CSS 
.special-class{
	color: red;
	border: 10px blue solid;
}

var h1 = document.querySelector("h1");
//Add the class to the Element
h1.classList.add("special-class");
//Remove class 
h1.classList.remove("special-class");
//Toggle a class
h1.classList.toggle("special-class");

//**********textContent****************
//Returns a string of all text in given element 
//Select the element 
var tag = document.querySelector("h1");
//Retrieve the textContent
tag.textContent
//alter the textContent 
tag.textContent = "A different Heading";

//**********innerHTML****************
//similar to textContent but returns all HTML eg. <strong>
var tag = document.querySelector("h1");
tag.innerHTML

//**********Attributes****************
//getAttribute and setAttribute to manipulate scr / href
<a href="www.google.com">I am a Link</a>
<img src="logo.png">
//
var link = document.querySelector("a");
link.getAttribute("href");
link.setAttribute("href", "http://www.dogs.com");

var img = document.querySelector("img");
img.setAttribute("src", "corgi.png");