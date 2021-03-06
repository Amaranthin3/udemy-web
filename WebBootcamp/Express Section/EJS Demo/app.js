var express = require("express");
var app = express();

//Informing Express to expect to use files with ejs extension
app.set('view engine', 'ejs');

//Informing Express to serve the contents of the Public Directory - CSS
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("home.ejs");
});

// Passing variables/data in a object to render
app.get("/fallinginlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
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

app.get("*", function(req, res){
    res.send("Sorry Boo Boo, I ain't what ya looking for");
});

app.listen(3000, () => {
    console.log("Server is listening on Port 3000");
});


