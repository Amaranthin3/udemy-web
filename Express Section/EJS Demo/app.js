var express = require("express");
var app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res){
    res.render("home.ejs");
});

// Passing variables/data in a object to render
app.get("/fallinginlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love.ejs", {thingVar: thing});
});

//Objects within an Array for posts
app.get("/posts", function(req, res){
    var posts = [
        {title: "Mysteries", author: "Rowling"},
        {title: "Crime", author: "King"},
        {title: "Adventure", author: "Lewis"},
    ];
    res.render("posts.ejs", {posts: posts});
});

app.get("/liefie", function(req, res){
    res.render("liefie");
});

app.listen(3000, () => {
    console.log("Server is listening on Port 3000");
});
