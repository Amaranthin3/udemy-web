//Add all scores together
//Divide by total number of scores
//Round Average

function average(scores){
    var total = 0;
    scores.forEach(function(scores){
        total += scores;
    });
    var avg = total/scores.length
    return Math.round(avg);
};

console.log("Average score for Environment Science");
var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores));

console.log("Average score for Organic Chemistry");
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2));