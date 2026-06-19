// 1. Single Inheritance

// One child class inherits from one parent class.

class Animal {
    eat() {
        console.log("Eating...");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Barking...");
    }
}

const dog = new Dog();

dog.eat();
dog.bark();

// Diagram
// Animal
//    │
//    ▼
//   Dog


// 2. Multilevel Inheritance

// A class inherits from a class that already inherits from another class.

class Animal {
    eat() {
        console.log("Eating...");
    }
}

class Mammal extends Animal {
    walk() {
        console.log("Walking...");
    }
}

class Dog extends Mammal {
    bark() {
        console.log("Barking...");
    }
}

const dog = new Dog();

dog.eat();
dog.walk();
dog.bark();


// Diagram
// Animal
//    │
//    ▼
// Mammal
//    │
//    ▼
//   Dog


// 3. Hierarchical Inheritance

// Multiple child classes inherit from the same parent class.

class Animal {
    eat() {
        console.log("Eating...");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Barking...");
    }
}

class Cat extends Animal {
    meow() {
        console.log("Meowing...");
    }
}

const dog = new Dog();
const cat = new Cat();

dog.eat();
cat.eat();


// Diagram
//         Animal
//         /    \
//        ▼      ▼
//      Dog     Cat


// 4. Multiple Inheritance (Using Mixins)

// JavaScript classes do not support multiple inheritance directly. Instead, we use mixins.

const FlyMixin = {
    fly() {
        console.log("Flying...");
    }
};

const SwimMixin = {
    swim() {
        console.log("Swimming...");
    }
};

class Duck {}

Object.assign(Duck.prototype, FlyMixin, SwimMixin);

const duck = new Duck();

duck.fly();
duck.swim();


// Diagram
//  FlyMixin      SwimMixin
//       \          /
//        \        /
//         ▼      ▼
//           Duck

// How Object.assign() Works

// Object.assign(Duck.prototype, FlyMixin, SwimMixin);

// Step 1:

// Duck.prototype = {}

// Step 2: Copy methods from FlyMixin

// Duck.prototype = {
//     fly() {
//         console.log("Flying...");
//     }
// }

// Step 3: Copy methods from SwimMixin

// Duck.prototype = {
//     fly() {
//         console.log("Flying...");
//     },
//     swim() {
//         console.log("Swimming...");
//     }
// }

// Now every Duck object can access both methods.

// 5. Hybrid Inheritance

// Combination of two or more inheritance types.

// Example: Hierarchical + Multilevel

class Animal {
    eat() {
        console.log("Eating...");
    }
}

class Mammal extends Animal {}

class Dog extends Mammal {
    bark() {
        console.log("Barking...");
    }
}

class Cat extends Mammal {
    meow() {
        console.log("Meowing...");
    }
}


// Diagram
//           Animal
//              │
//              ▼
//           Mammal
//           /    \
//          ▼      ▼
//        Dog     Cat