class Employee {
  constructor(name, age, role) {
    this.name = name;
    this.age = age;
    this.role = role;
  }

  display() {
    console.log(this.name);
    console.log(this.age);
  }

  designation() {
    console.log(this.role);
  }
}

class Developer extends Employee {
  work() {
    console.log("I do coding");
  }
}

class Tester extends Employee {
  work() {
    console.log("I do debugging");
  }
}

let d = new Developer("MD AFFAN ANWAR", 25, "Java Developer");
d.display();
d.designation();
d.work();

let t = new Tester("Dr.Syeda Bibi T ashraf", 30, "QA Tester");
t.display();
t.designation();
t.work();
















//Method Overridding
class Parent {
  constructor(name) {
    this.name = name;
  }
  marry() {
    console.log("Marry at 40");
  }
}
class Child extends Parent {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
  marry() {
    super.marry();
    console.log("Marry at 45");
  }
}

let c = new Child("MD AFFAN ANWAR", 25);
console.log(c.name);
console.log(c.age);
c.marry();