var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));
// app.use(express.static("assets"));

app.get("/home", function(req, res){
    res.render("home");
});

app.get("*", function(req, res){
    res.send("Opps you did it again!");
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});