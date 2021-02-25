//Arguments and Parameters

// const speak = function(name="Shané", time="Morning"){
//     console.log(`Good ${time} ${name} Welcome Back`);
// };

// speak("Nick"); 

//Returning Values - REGULAR

// const calcArea = function(radius){
//     return 3.14 * radius**2;
// };

// const area = calcArea(10);
// console.log(area);

//Returning Values - ARROW FUNCTION => replaces function keyword

// const calcArea = (radius) => {
//     return 3.14 * radius**2;
// };

// const area = calcArea(10);
// console.log(area);

//Returning with one parameter and return - ARROW FUNCTION

// const calcArea = radius => 3.14 * radius**2;

// const area = calcArea(10);
// console.log(area);

// Example

const bill = (products, tax) => {
    let total = 0;
    for(let i =0; i<products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
};

console.log(bill([10],[15],[30], 0.2));