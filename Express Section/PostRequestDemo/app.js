var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.set("view engine", "ejs");

app.use(express.static("public"));
//install body-parser. Instruct Express to use package
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.render("home");
});

//Extracting data from the form named newfriend
app.post("/addfriend", function(req, res){
    console.log(req.body.newfriend);
    res.send("Welcome to the post");
});

app.get("/friends", function(req, res){
    var friends = ["Marshall","Barney","Ted","Lilly","Robin"];
    //Passing the array through as a object to "friends.ejs"
    res.render("friends", {friends: friends});
});

app.get("*", function(req, res){
    res.send("Sorry Boo Boo, Nothing to see here");
});

app.listen(3000, () => {
    console.log("Server is listening on Server 3000");
});