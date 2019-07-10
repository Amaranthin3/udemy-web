var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", function(req, res){
    res.send("Welcome to the Home Page");
});

app.get("*", function(req, res){
    res.send("Sorry Boo Boo, Nothing to see here");
});

app.listen(3000, () => {
    console.log("Server is listening on Server 3000");
});