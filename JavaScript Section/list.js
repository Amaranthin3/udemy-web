var todos = [""];

var input = prompt("What would you like to do?");

//does not equal to quit
while(input !== "quit"){
	//handle input
	if(input === "list"){
		listTodos(); 
	} else if(input === "new") {
		addTodos();
	} else if(input === "delete"){
		deleteTodos();
	}
//ask again for new input 
 input = prompt("What would you like to do?");
}
console.log("OK, You have Quit the App");

//ask for new todo and add to todos array.
//Following Delete a todo.
//Ask for index of that todo. Splice it. (where, how many)
function listTodos(){
	console.log("************")
	todos.forEach(function(todo, i){
		console.log(i + ": " + todo);
	});
	console.log("************")
}
function addTodos(){
	var newTodo = prompt("Enter new Todo");
	todos.push(newTodo);
	console.log("Added Todo");
}
function deleteTodos(){
	var index = prompt("Enter index of todo to delete");
	todos.splice(index,1);
	console.log("Deleted Todo");		
}
