// Abstraction means:
// Showing only the essential features and hiding the internal implementation details.
// The user knows what an object does, but not how it does it.

// Example Without Abstraction
// class CoffeeMachine {
//     boilWater() {
//         console.log("Boiling water...");
//     }
//     addCoffee() {
//         console.log("Adding coffee powder...");
//     }
//     addMilk() {
//         console.log("Adding milk...");
//     }
//     serveCoffee() {
//         console.log("Coffee Ready!");
//     }
// }
// const machine = new CoffeeMachine();

// machine.boilWater();
// machine.addCoffee();
// machine.addMilk();
// machine.serveCoffee();





// Example Abstraction
class CoffeeMachine {
    boilWater() {
        console.log("Boiling water...");
    }
    addCoffee() {
        console.log("Adding coffee powder...");
    }
    addMilk() {
        console.log("Adding milk...");
    }
    serveCoffee() {
        this.boilWater();
        this.addCoffee();
        this.addMilk();
        console.log("Coffee Ready!");
    }
}
const machine = new CoffeeMachine();

machine.serveCoffee();