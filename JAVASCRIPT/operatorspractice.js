console.log(1 + "2" + 3); //123

console.log(1 + 2 + "3"); //33

console.log("5" - 2); //3
console.log("5" + 2); //52

console.log(0 == false); //true
console.log(0 === false); //false

let a = 5;
console.log(a++);// 5
console.log(a); //6

let b = 5;
console.log(++b); //6

let x = 5;
let y = x++ + ++x;
console.log(y);// 12

console.log(true + true); //2
console.log(true + false); //1

console.log([] == false); //true

console.log("" == 0); //true

console.log(5 && 10); //10

console.log(0 || 100); //100

console.log(!"hello"); //false

console.log(!0); //true

console.log("10" * "2"); //20

console.log("10" / 2); //5

console.log("hello" * 2); //Nan - not a number

console.log(typeof NaN); //number

console.log([] + []); // ""

console.log([] + {}); //[object Object] {} , Array []

console.log({} + []); //0

let c = "5";
let d = 2;
console.log(c - d + c); //35

console.log([] == ![]); //true

console.log(typeof null); //object

console.log([] == 0); //true

console.log([1,2] + [3,4]); //1, 2, 3, 4

console.log("2" > "12"); //true

console.log(2 > "12"); //false

console.log(Boolean("false")); //true

console.log(Boolean("")); //false

console.log(100 / "10"); //10

console.log(true == "1"); //true

console.log(false == "0"); //true

console.log(false === "0"); //false

console.log(1 < 2 < 3); //true

console.log(3 > 2 > 1); //false

console.log(+"10");//10

console.log(+"hello"); //Nan

let p = 10;
console.log(p += 5); //p = p + 5 = 15

let q = 10;
console.log(q *= 2); //20

console.log(2 ** 3); //8

console.log(typeof typeof 1); // " number " string

console.log([] instanceof Array); //true

console.log({} instanceof Object); //true

console.log([] == ""); //true

console.log([0] == 0); //true

console.log([1] == 1); //true

console.log([1] === 1); //false