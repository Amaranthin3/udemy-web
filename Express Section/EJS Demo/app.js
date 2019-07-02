var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.render("home.ejs");
});

app.get("/fallinginlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love.ejs");
});

app.listen(3000, () => {
    console.log("Server is listening on Port 3000");
});
