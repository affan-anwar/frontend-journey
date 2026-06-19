let fruits = ["apple", "banana", "cherry"];
fruits.forEach(fruit => console.log(fruit));
// Output: "apple", "banana", "cherry"


let numbers = [1, 2, 3]
numbers.forEach(i => console.log(`The numbers is ${i * 5}`));


let squared = numbers.map(num => num * num);
console.log(squared); // Output: [1, 4, 9]
console.log(numbers)


let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
console.log(numbers)

let sum = numbers.concat(fruits);
console.log(newarr)
let narr = newarr.concat(stu_info)
console.log(narr)

let words = numbers.concat (fruits);
let narr = newarr.concat(stu_info)
console.log(narr)

let words =  [" hello," "world", 0.899];
let sentence = words.join(" - ");
console.log(sentence); // output: "Hello world"