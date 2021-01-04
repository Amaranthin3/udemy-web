var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/home", function(req, res){
    res.render("home");
});

app.get("*", function(req, res){
    res.send("Oppsie, not here!");
});

app.listen(3000, () => {
    console.log("Server is listening on Server 3000");
});