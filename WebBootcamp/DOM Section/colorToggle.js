//Color Toggle. If White. Make it Pink. If Pink make it White.

// var button = document.querySelector("button");
// var isPink = false;

// button.addEventListener("click", function(){
// 	if(isPink){
// 		this.style.background = "white";
// 	} else {
// 		this.style.background = "pink";
// 	}
// 	isPink =! isPink;
// });


//Refactoring
var button = document.querySelector("button");

button.addEventListener("click", function(){
	button.classList.toggle("pink");
});

//Set Pink to False (White Background)
//If it is Pink then set to White Background
//Otherwise if it is White then set it to Pink
//isPink = true (allows for the toggle when the background is actually pink)