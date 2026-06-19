// 1.Write a function which accepts two numbers and returns their sum.
function sum(a, b) {
    return a + b;
}

console.log(sum(10, 20)); // Output: 30

// 2.Write a function which checks if the given number is positive or negative.
// 10  ---> given number is positive
// -4  ---> given number is negative

function checkNumber(num) {
    if (num > 0) {
        return "given number is positive";
    } else if (num < 0) {
        return "given number is negative";
    } else {
        return "given number is zero";
    }
}

console.log(checkNumber(10));
console.log(checkNumber(-4));
console.log(checkNumber(0));

// 3. Write a function which accepts student marks and prints grade accordingly.
// 100-90  → A+
// 80-90   → A
// 70-80   → B
// 60-70   → C
// 50-60   → Low marks

function checkGrade(marks) {
    if (marks < 0 || marks > 100) {
        console.log("Invalid marks");
    } else if (marks >= 90) {
        console.log("A+");
    } else if (marks >= 80) {
        console.log("A");
    } else if (marks >= 70) {
        console.log("B");
    } else if (marks >= 60) {
        console.log("C");
    } else if (marks >= 50) {
        console.log("Low marks");
    } else {
        console.log("Fail");
    }
}

checkGrade(95);
checkGrade(85);
checkGrade(75);
checkGrade(65);
checkGrade(55);
checkGrade(40);

// 4. Write a function which will print all the numbers from 1 to 50.

function printNumbers() {
    for (let i = 1; i <= 50; i++) {
        console.log(i);
    }
}

printNumbers();

// Write a function which will print all numbers from 1 to 50. If a number is divisible by 3, print "Fizz" instead of the number.

function printFizz() {
    for (let i = 1; i <= 50; i++) {
        if (i % 3 === 0) {
            console.log("Fizz");
        } else {
            console.log(i);
        }
    }
}

printFizz();

// Write a function which will print all numbers from 1 to 50.

// If number is divisible by 3, print "Fizz"
// If number is divisible by 5, print "Buzz"

function printFizzBuzz() {
    for (let i = 1; i <= 50; i++) {
        if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

printFizzBuzz();

// Write a function which will print all numbers from 1 to 50.

// If number is divisible by 3, print "Fizz"
// If number is divisible by 5, print "Buzz"
// If number is divisible by both 3 and 5, print "FizzBuzz"

function printFizzBuzz() {
    for (let i = 1; i <= 50; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

printFizzBuzz();

// 5. Write a function which will return reverse of given number.
// 123  → 321
// 768  → 867
function reverseNumber(num) {
    let reverse = 0;

    while (num > 0) {
        let lastDigit = num % 10;
        reverse = reverse * 10 + lastDigit;
        num = Math.floor(num / 10);
    }

    return reverse;
}

console.log(reverseNumber(123));
console.log(reverseNumber(768));

//  Write a function which will return reverse of given number.
// 123  → 321
// 768  → 867

function reverseNumber(num) {
    let reverse = 0;

    while (num > 0) {
        let lastDigit = num % 10;
        reverse = reverse * 10 + lastDigit;
        num = (num - lastDigit) / 10;
    }

    return reverse;
}

console.log(reverseNumber(123));
console.log(reverseNumber(768));

// 6. Write a function which will return reverse of given string.
// "hello"  →  "olleh"
// "affan"  →  "naffa"

function reverseString(str) {
    let reverse = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reverse = reverse + str[i];
    }

    return reverse;
}

console.log(reverseString("hello"));
console.log(reverseString("affan"));


// Given a string and a character, calculate number of occurrences of that character in the given string.
// "salman", "a"   → 2
// "kodnest", "z"  → 0
function countCharacter(str, ch) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ch) {
            count++;
        }
    }

    return count;
}

console.log(countCharacter("salman", "a"));  // 2
console.log(countCharacter("kodnest", "z")); // 0


// Given an array of numbers, find the highest number
// [10, 5, 30, 20]  →  30
// [4, 9, 2, 15]    →  15

function findHighest(arr) {
    let highest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > highest) {
            highest = arr[i];
        }
    }

    return highest;
}

console.log(findHighest([10, 5, 30, 20])); // 30
console.log(findHighest([4, 9, 2, 15]));   // 15


// Given an array of numbers, find the second highest number
// [10, 5, 30, 20]  → 20
// [4, 9, 2, 15]    → 9
// [10, 10, 5]      → 5

function findSecondHighest(arr) {
    let highest = null;
    let secondHighest = null;

    for (let i = 0; i < arr.length; i++) {
        if (highest === null || arr[i] > highest) {
            secondHighest = highest;
            highest = arr[i];
        } else if (arr[i] !== highest && (secondHighest === null || arr[i] > secondHighest)) {
            secondHighest = arr[i];
        }
    }

    return secondHighest;
}

console.log(findSecondHighest([10, 5, 30, 20])); // 20
console.log(findSecondHighest([4, 9, 2, 15]));   // 9
console.log(findSecondHighest([10, 10, 5]));     // 5