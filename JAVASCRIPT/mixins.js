const flyMixin = {
    fly() {
        console.log("I can fly");
    }
};

const swimMixin = {
    swim() {
        console.log("I can swim");
    }
};

class Duck {}

// Object.assign(Duck.prototype, flyMixin, swimMixin);

const d = new Duck();

d.fly();
d.swim();

// Before

// Duck.prototype = {}

// After
// Object.assign(Duck.prototype, flyMixin, swimMixin);
// Duck.prototype = {
//     fly() {
//         console.log("I can fly");
//     },
//     swim() {
//         console.log("I can swim");
//     }
// }