// var request = require('request');
// request('http://www.google.com', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

// var request = require("request"); 
// request("http://www.google.com", function(error, response, body){
//     if(error){
//         console.log("OOPS! There is an Error!");
//         console.log(error);
//     } else {
//         if(response.statusCode == 200){
//             console.log(body);
//         }
//     } 
// });

//JSON.parse = Printed to a String -> Printed to a Object
var request = require("request");

console.log("Wind is at ... ");

request("http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=9f9d0f8a2669d0e2a78a925f76941861", function(error, response, body){
    if(!error && response.statusCode == 200){
        var parsedData = JSON.parse(body);
        console.log(parsedData["wind"]);
    };
});