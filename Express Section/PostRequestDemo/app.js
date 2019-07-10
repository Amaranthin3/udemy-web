var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.send("Welcome to the Home Page");
});

app.listen(3000, () => {
    console.log("Server is listening on Server 3000");
});