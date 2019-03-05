var todos = [""];

var input = prompt("What would you like to do?");

//does not equal to quit
while(input !== "quit"){
	//handle input
	if(input === "list"){
		todos.forEach(function(todo){
			console.log(todo);
		});
	
	//ask for new todo and add to todos array
	} else if(input === "new"){
	var newTodo = prompt("Enter new Todo");
		todos.push(newTodo);
} 

//ask again for new input 
var input = prompt("What would you like to do?");
}
console.log("OK, You have Quit the App");