// let student = {
//     name: "MD AFFAN ANWAR",
//     age: 25,

//     study() {
//          console.log("MD AFFAN ANWAR studies");
//     }
// };
// console.log(student.name);
// console.log(student.age);
// student.study();
   

// //class
// class Student {
//     name = "MD AFFAN ANWAR";
//     age = 25;

//     study() {
//          console.log("studies");
//     }
   
// }
// let s = new Student();
// console.log(s.name);


//constructor
// class Student {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   study() {
//     console.log("Studies");
//   }
// }

// let s = new Student("MD AFFAN ANWAR", 22);
// console.log(s.name);
// console.log(s.age);
// s.study();

// let s1 = new Student("MD ADNAN ANWAR", 25);
// console.log(s1.name);
// console.log(s1.age);
// s1.study();

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  study() {
    console.log(this.name, "Studies");
  }
}

let s = new Student("Er.MD AFFAN ANWAR", 25);

console.log(s.name);
console.log(s.age);
s.study();

let s1 = new Student("Dr.Bibi T Ashraf", 30);

console.log(s1.name);
console.log(s1.age);
s1.study();