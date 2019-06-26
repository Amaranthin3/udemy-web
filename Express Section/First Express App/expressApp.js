var express = require("express");
var app = express();

//3 Routes. "/" "bye" "dog"
app.get("/", function(req, res){
    res.send("Hi There!");
});

app.get("/bye", function(req, res){
    res.send("Bye");
});

app.get("/dog", function(req, res){
    res.send("Bark");
});

//Listening for Requests
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
});

