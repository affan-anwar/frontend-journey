//function declaration
function greet() {
    console.log("Hello Everyone from function Declaration!");
}
greet();

//function Expression
const greet1 = function() {
    console.log("Hello Everyone from function Expression!");
};

greet1();

//Arrow function
const greet2 = () => console.log("Hello Everyone from Arrow Function!");

greet2();

//arrow function with multiple parameters
const add = (a, b) => console.log(a + b);
add(10, 20);

//Immediately Invoked Function Expression (IIFE) (Anonymous function)
(function() {
    console.log("Hello Everyone from IIFE!");
})();

//Assignment - 4 ways you need to create a func for adding 3 numbers
//function declaration
function addDeclaration(a, b, c) {
    return a + b + c;
}
console.log(addDeclaration(10, 20, 40));

//function Expression
const addExpression = function(a, b, c) {
    return a + b + c;
};
console.log(addExpression(10, 10, 4));


//Arrow function
const addArrow = (a, b, c) => a + b + c;
console.log(addArrow(10, 10, 2));

//Immediately Invoked Function Expression (IIFE) (Anonymous function)
(function(a, b, c) {
    console.log(a + b + c);
})(10, 20, 30);