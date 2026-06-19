// If Statement - A student is eligible for voting if age ≥ 18.

//If-Else Statement - Write a program to check if a number is positive or negative.

//If-Else Ladder- Check if a number is positive, negative, or zero.

//Nested If - A student passes if marks ≥ 40. If marks ≥ 80, show “Distinction”.

//Switch Case 1. Print the grade based on letter (A=Excellent, B=Good, C=Average, D=Poor).
//2. print the season based on months in the year (3,4,5 - summer) (11,12,1,2 - winter) (6,7,8,9 - rainy)

//---------- Looping constructs ---------------------

//For Loop - Print the first 10 natural numbers.

//While Loop - Print numbers from 1 to 5 using while loop.

//Do-While Loop: ATM machine: Keep asking PIN until the user enters 1234.

//For…of Loop - Print all fruits in a basket.

//For…in - Print all student details from an object.

//forEach Loop - Print the squares of all numbers in an array.

// ------------------ control flow modifiers------------------------

//Break Statement - Question: Stop printing when number reaches 3.

//Continue Statement -Question: Skip printing number 3.

// ------------------- Conditional Constructs ---------------------------------------------

// If Statement
// A student is eligible for voting if age ≥ 18.

let age = 20;

if (age >= 18) {
    console.log("Eligible to vote");
}

//If-Else Statement - Write a program to check if a number is positive or negative.

var num = -5;

if (num >= 0) {
    console.log(num + " is Positive");
} else {
    console.log(num + " is Negative");
}

//If-Else Ladder- Check if a number is positive, negative, or zero.

var num = 0;

if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

//Nested If - A student passes if marks ≥ 40. If marks ≥ 80, show “Distinction”.

let marks = 85;

if (marks >= 40) {
    if (marks >= 80) {
        console.log("Distinction");
    } else {
        console.log("First class");
    }
} else {
    console.log("Fail");
}

//Switch Case Print the grade based on letter (A=Excellent, B=Good, C=Average, D=Poor).

let grade = 'D';

switch (grade) {
    case 'A': console.log("Excellent"); break;
    case 'B': console.log("Good"); break;
    case 'C': console.log("Average"); break;
    case 'D': console.log("Poor"); break;
    default: console.log("Invalid grade");
}

//2. print the season based on months in the year (3,4,5 - summer) (11,12,1,2 - winter) (6,7,8,9 - rainy)
let month = 100;
switch(month){
    case 12:
    case 1:
    case 2:
        document.writeln("Winter");
        break;
    
    case 3:
    case 4:
    case 5:
    case 6:
        document.writeln("Summer");
        break;

    case 7:
    case 8:
        document.writeln("Moonson");
        break;

    case 9:
    case 10:
    case 11:
        document.writeln("Spring");
        break;

    default:
        document.writeln("Invalid Season");
}


//---------- Looping constructs ---------------------

//For Loop - Print the first 10 natural numbers.
for (let i = 1; i <= 10; i++) {
    process.stdout.write(i + " ");  // in browser use console.log(i)
}

//While Loop - Print numbers from 1 to 5 using while loop.

let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

//Do-While Loop: ATM machine: Keep asking PIN until the user enters 1234.

// let pin;
// do {
//     pin = parseInt(prompt("Enter PIN: "));
// } while (pin !== 1234);

// document.writeln("Access Granted!");

//For…of Loop - Print all fruits in a basket.

let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
    console.log(fruit);
}
//For…in - Print all student details from an object.

let student = { name: "John", age: 22, grade: "A" };

for (let key in student) {
    console.log(key + " → " + student[key]);
}

//forEach Loop - Print the squares of all numbers in an array.

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(n => {
    console.log(`Square of ${n} = ${n * n}`);
});

// ------------------ control flow modifiers------------------------

//Break Statement - Question: Stop printing when number reaches 3.

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break; // stops loop
    }
    console.log(i);
}

//Continue Statement -Question: Skip printing number 3.

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; // skips iteration
    }
    console.log(i);
}// If Statement - A student is eligible for voting if age >= 18.
let age = 20;

if (age >= 18) {
  console.log("Eligible for voting");
}

//If-Else Statement - Write a program to check if a number is positive or negative.
let number = -5;

if (number >= 0) {
  console.log("Positive number");
} else {
  console.log("Negative number");
}

//If-Else Ladder- Check if a number is positive, negative, or zero.
let number1 = -5;

if (number1 > 0) {
  console.log("Positive number");
} else if (number1 < 0) {
  console.log("Negative number");
} else {
  console.log("Zero");
}

//Nested If - A student passes if marks >= 40. If marks >= 80, show “Distinction”.
let marks = 85;

if (marks >= 40) {
  console.log("Pass");

  if (marks >= 80) {
    console.log("Distinction");
  }
} else {
  console.log("Fail");
}

//Switch Case 1. Print the grade based on letter (A=Excellent, B=Good, C=Average, D=Poor).
let grade = "A";

switch (grade) {
  case "A":
    console.log("Excellent");
    break;

  case "B":
    console.log("Good");
    break;

  case "C":
    console.log("Average");
    break;

  case "D":
    console.log("Poor");
    break;

  default:
    console.log("Invalid grade");
}

//2. print the season based on months in the year (3,4,5 - summer) (11,12,1,2 - winter) (6,7,8,9 - rainy)
let month = 12;

switch (month) {
  case 3:
  case 4:
  case 5:
    console.log("Summer");
    break;

  case 6:
  case 7:
  case 8:
  case 9:
    console.log("Rainy");
    break;

  case 11:
  case 12:
  case 1:
  case 2:
    console.log("Winter");
    break;

  default:
    console.log("Invalid month");
}

//---------- Looping constructs ---------------------

//For Loop - Print the first 10 natural numbers.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//While Loop - Print numbers from 1 to 5 using while loop.
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}

//Do-While Loop: ATM machine: Keep asking PIN until the user enters 1234.
const prompt = require("prompt-sync")();

let pin;

do {
  pin = Number(prompt("Enter your PIN: "));

  if (pin !== 1234) {
    console.log("Wrong PIN, try again");
  }
} while (pin !== 1234);

console.log("Access granted");

//For…of Loop - Print all fruits in a basket.
let fruits = ["Apple", "Banana", "Mango", "Orange"];

for (let fruit of fruits) {
  console.log(fruit);
}

//For…in - Print all student details from an object.
let student = {
  name: "Affan",
  age: 22,
  course: "Java Full Stack"
};

for (let key in student) {
  console.log(key + ": " + student[key]);
}

//forEach Loop - Print the squares of all numbers in an array.
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (num) {
  console.log(num * num);
});

// ------------------ control flow modifiers------------------------

//Break Statement - Question: Stop printing when number reaches 3.
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }

  console.log(i);
}

//Continue Statement -Question: Skip printing number 3.
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }

  console.log(i);
}