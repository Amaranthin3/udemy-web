var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("home");
});

app.post("/addfriend", function(req, res){
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