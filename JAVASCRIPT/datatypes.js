//Primitive 
//Number
//dynamically typed Programming
let a = 10;
console.log(typeof a, a); //Number 10


a = "AFFAN";
console.log(a , typeof a); //String AFFAN


//Javascript loosely typed
let b = 3.14
const pi = 3.14; 
console.log(typeof b, b)


//String - "", '', ``
let str = `Shahzada`
console.log(str, typeof str)
// My name is Shahzada aged around 10 , pi value is 3.14
console.log("My name is " + str + " aged around " + a + ", pi value is " + pi)
console.log("My name is " , str) //one space


// ES6 string literals `${varname}` = value
console.log(`My name is ${str} aged around ${a} , pi value is ${pi}`)


//boolean true or false
let isvalid = false;
console.log(typeof isvalid, isvalid)


//undefined
let name;
console.log(name)


let z = -10/0;
z = 0/0 //Nan
console.log(z)


//null
let payment = null;
console.log(payment) //null


//bigint
let g = 100n;
console.log(typeof g, g)


//symbol
let x = Symbol("user");
console.log(x)
console.log(typeof x)


//Complex
//Array - []
//index     0  1  2 
let arr = [1, 2, 3];
console.log(arr , arr[1])


//object {key: value}
let person = {
    name: "Shahzada",
    age: 22
};
console.log(person.name); // Output: Shahzada value
console.log(Object.keys(person)); // Output: 22
console.log(person)//object


//function
function add() {
    c = 3 + 3;
    console.log(c);
}
add()
