//Instead of console.log you return a value

function square(num) {
	return num * num;
}

//Function capitalizes the first character in a string
function capitalize(string) {
	if(typeof string === "number") {
		return "That is not a string!";
	}
	return string.charAt(0).toUppercase() + string.slice(1);
}

var city = "paris";
var capital = capitalize(city);

console.log(capital);
