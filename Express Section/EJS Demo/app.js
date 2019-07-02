var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("<h1>Welcome to the Home Page</h1>");
});


app.listen(3000, () => {
    console.log("Server is listening on Port 3000");
});