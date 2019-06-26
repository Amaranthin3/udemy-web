var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi There and Welcome to the Assignment!");
});

app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal;
    var sound = {
        pig: "Oink",
        cow: "Moo",
        cat: "Meow",
        dog: "Woof"
    };
    var sound = sound[animal];
    res.send("The " + animal + " says " + sound + " !");
});



app.get("*", function(req, res){
    res.send("Sorry, page not found ... Why did you do this to yourself?");
});

app.listen(3000, () => {
	console.log("Server listening on port 3000");
});
