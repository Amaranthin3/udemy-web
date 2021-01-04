var faker = require("faker");

var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

console.log(randomName);
console.log(randomEmail);

for(var i = 0; i < 10; i++){
    console.log(faker.commerce.productName() + " - R" + faker.commerce.price());
}




