//selectorExercise
//printing all anchor tags on the page
var links = document.getElementsByTagName("a");
	for (var i = 0; i < links.length; i++){
		console.log(links[i].textContent);
	}

//changing styles

var links = document.getElementsByTagName("a");
	for (var i = 0; i < links.length; i++){
		links[i].style.background="pink";
		links[i].style.border="1px dashed purple";
	}

//changing href
var links = document.getElementsByTagName("a");
	for (var i = 0; i < links.length; i++){
		console.log(links[i].getAttribute("href"));
	}
	
var links = document.getElementsByTagName("a");
	for (var i = 0; i < links.length; i++){
		links[i].setAttribute("href", "http://www.bing.com");
	}