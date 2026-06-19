class Vehicle {
    start() {
        console.log("Vehicle started");
    }

    move() {
        console.log("Vehicle is moving");
    }
}

class Car extends Vehicle {

    // Overridden Method
    move() {
        console.log("Car is moving on roads");
    }

    // Specialized Method
    openSunroof() {
        console.log("Sunroof opened");
    }
}

const car = new Car();

// Inherited Method
car.start();

// Overridden Method
car.move();

// Specialized Method
car.openSunroof();