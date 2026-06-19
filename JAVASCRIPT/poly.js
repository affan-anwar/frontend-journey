//the same method name, call behave in many form
//poly = many, morphism = forms
//one interface, many forms



// Types of Polymorphism in JavaScript
// Method Overriding (Runtime Polymorphism) ✅
// Method Overloading (Not directly supported in JavaScript)


class Animal {
    makeSound() {
        console.log("Animal makes a sound");
    }
}


class Dog extends Animal {
    makeSound() {
        console.log("Dog barks");
    }
}


class Cat extends Animal {
    makeSound() {
        console.log("Cat meows");
    }
}


const dog = new Dog();
const cat = new Cat();


dog.makeSound();
cat.makeSound();


// The same method makeSound() behaves differently for different objects.