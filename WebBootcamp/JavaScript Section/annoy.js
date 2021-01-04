// var answer = prompt("Are we there yet?");

// while(answer !== "yes" && answer !== "yeah") {
// 	var answer = prompt("Are we there yet?");
// }

// alert("YAY, we made it!");

//VERSION 2
//User can enter any string as long as it contains "yes" in it

var answer = prompt("Are we there yet?");

while(answer.indexOf("yes" && "yeah" ) === -1 ) {
	var answer = prompt("Are we there yet?");
}

alert("YAY, we made it!");

