// Takes another function as an argument (input).
//HOF
function order(callprepare, callserve) {
    console.log("1. Order Food");
      callprepare();
      callserve();
}
//call back functions
function prepare() {
    console.log("2. Preparation started");
}
function servecustomer() {
      console.log("3. Enjoy your food");
}


order(prepare, servecustomer);


function greet(name) {
  console.log(`Hello, ${name}!`);
}

function processUser(name, callback) {
  callback(name);
}

processUser("Affan", greet);

//HOF's
const numbers = [1, 2, 3, 4, 5, 6];


// Step 1: Double each number
const doubled = numbers.map(num => num * 2);


// Step 2: Keep only numbers greater than 5
const filtered = doubled.filter(num => num > 5);


// Step 3: Find the sum of remaining numbers
const total = filtered.reduce((sum, num) => sum + num, 0);


console.log("Doubled:", doubled);   // [2, 4, 6, 8, 10, 12]
console.log("Filtered:", filtered); // [6, 8, 10, 12]
console.log("Total:", total); 