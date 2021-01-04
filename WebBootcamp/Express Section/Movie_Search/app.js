var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("search");
});

app.get("/results", function(req,res){
    var query = req.query.search;
    var url = "http://www.omdbapi.com/?s=" +query+ "&apikey=thewdb"

    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            //Passing var data into the template . data found in results.ejs
            res.render("results", {data: data});
        }
    });
});

app.get("*", function(req, res){
    res.send("You ain't in the right place my friend");
});

app.listen(3000, () => {
    console.log("Server is listening on Port 3000.");
});

