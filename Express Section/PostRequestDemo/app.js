var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static("public"));
//install body-parser. Instruct Express to use package
app.use(bodyParser.urlencoded({extended: true}));

//Array must be outside of the scope. 
var friends = ["Marshall","Barney","Ted","Lilly","Robin"];

app.get("/", function(req, res){
    app.get("/", function(req, res){
    res.render("home");
});

//Extracting data from the form named newfriend
//Adding new inputed data to the friends array
app.post("/addfriend", function(req, res){
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
});

app.get("/friends", function(req, res){
    //Passing the array through as a object to "friends.ejs"
    res.render("friends", {friends: friends});
});

app.get("*", function(req, res){
    res.send("Sorry Boo Boo, Nothing to see here");
});

app.listen(3000, () => {
    console.log("Server is listening on Server 3000");
}); 
