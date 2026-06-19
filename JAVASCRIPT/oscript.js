let a = 10;
let b = 5;
document.writeln("Arithmetic operator");
document.writeln("<br>");
document.writeln(a+b);// 15
document.writeln("<br>");
document.writeln(a-b);// 5
document.writeln("<br>");
document.writeln(a*b);// 50
document.writeln("<br>");
document.writeln(a/b);// 2
document.writeln("<br>");
document.writeln(a%b);// 0
document.writeln("<br>");
document.writeln(a**b);// 100000
document.writeln("<br>");
let x = 8;
document.writeln(x++); //8.  mem - 9
document.writeln(x);// 9
document.writeln("<br>");
let y = 4;
document.writeln(y--);// 4
document.writeln(y);// 3
document.writeln("<br>");

document.writeln("Assignment operators / Shorthand operators");
document.writeln("<br>");
let c = 5;
document.writeln(c);// 5
document.writeln("<br>");
document.writeln(c+=3);//c = c+3; 8
document.writeln("<br>");
document.writeln(c-=3);//c = c-3; 5
document.writeln("<br>");
document.writeln(c*=3);//c = c*3; 15
document.writeln("<br>");
document.writeln(c/=3);//c = c/3; 5
document.writeln("<br>");
document.writeln(c%=3);//c = c%3; 2
document.writeln("<br>");

document.writeln("Relational operators imp");
document.writeln("<br>");
let m = 5;//number
let n = "5";//string
let o = "3";//string
document.writeln(m==n);// values true
document.writeln("<br>");
document.writeln(m===n);//false - values + datatype - strictly equalto
document.writeln("<br>");
document.writeln(m!=n);// true - values
document.writeln("<br>");
document.writeln(m!==o);//true - values + datatype - strictly not eqval
document.writeln("<br>");
document.writeln(m<o);//false
document.writeln("<br>");
document.writeln(m<=o);//false
document.writeln("<br>");
document.writeln(m>o);//true
document.writeln("<br>");
document.writeln(m>=o);//true
document.writeln("<br>");

document.writeln("bitwise Logical operators");
document.writeln("<br>");
let age = 8;
console.log( 2 & 3); //2
console.log( 2 | 3); //3
document.writeln("Logical operators");
console.log(age > 18 && age < 30); // Output: false
console.log(age < 18 || age > 30); // Output: true
document.writeln("check output on console");
document.writeln("<br>");

document.writeln("Ternary operators");
document.writeln("<br>");
// condition ? "Exp 1 (true" : "Exp2 (false"
let canVote = (age >= 18) ? "Yes" : "No";
document.writeln(canVote); // Output: Yes
//to find weather num is even or odd
document.writeln("<br>");
let num = 16;
let res = (num%2==0) ? "Even" : "Odd";
document.writeln(res); // Output: Even

document.writeln("<br>");

document.writeln("Type operators");
document.writeln("<br>");
let p = 10;
document.writeln(p);//10
document.writeln(typeof(p));//string
document.writeln("<br>");
let q = "Hello";
document.writeln(q);//Hello
document.writeln(typeof(q));//String
document.writeln("<br>");
let r = true;
document.writeln(r);//true
document.writeln(typeof(r));//boolean
document.writeln("<br>");
document.writeln("<br>");
console.log(typeof "Hello"); // Output: string 

console.log([1,2,3] instanceof Object); // Output: true