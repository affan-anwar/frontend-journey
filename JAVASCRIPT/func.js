// add 2 numbers - declared
function add() {
    let c = 10 + 20;
    console.log(c); // 30
}
// call function
add();


// find square of a number
function square() {
    let num = 10;
    let res = num * num;
    console.log(res); // 100
}
square();


// writ a function area and perimeter of a circle
function circleCalc3(r) {
    return {
        area: Math.PI * r * r,
        perimeter: 2 * Math.PI * r
    };
}

let circleResult = circleCalc3(5);
console.log("Area:", circleResult.area);
console.log("Perimeter:", circleResult.perimeter);


//write a function simple interest -> (P * R * T) / 100
function simpleInterest3(p, r, t) {
    return (p * r * t) / 100;
}

console.log("Simple Interest:", simpleInterest3(1000, 5, 2));

//find square of a number
// 1. w/o i/p and o/p
function square() {
    let num = 10;
    let res = num * num;
    console.log(res); // 100
}
square();

//2. with i/p and without o/p
function square1(num) {
    let res = num * num;
    console.log(res); //16
}

//3. w/o i/p amd with o/p
function square2() {
    let num = 6;
    return num * num;
}
console.log(square2());

//4. with i/p and o/p
function square3(num) {
    return num * num;
}
let res = square3(3)
console.log(`The square of the number is ${res}`);

function square3(num) {
    return num * num;
}
let num = 7;
let res1 = square3(num)
console.log(`The square of the ${num} is ${res1}`);

//assignment -
// 4 types for finding area of a rectangle
// w/o i/p and o/p

function area1() {
  let l = 10;
  let b = 5;
  let area = l * b;
  console.log("Area:", area);
}

area1();

//2. with i/p and without o/p
function area2(l, b) {
  let area = l * b;
  console.log("Area:", area);
}

area2(10, 5);

//3. w/o i/p amd with o/p
function area3() {
  let l = 10;
  let b = 5;
  return l * b;
}

console.log("Area:", area3());

//4. with i/p and o/p
function area4(l, b) {
  return l * b;
}

console.log("Area:", area4(10, 5));