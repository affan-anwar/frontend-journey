// Single
{
  class Animal {
    eat() {
      console.log("Eating");
    }
  }

  class Dog extends Animal {
    bark() {
      console.log("Barking");
    }
  }

  let d = new Dog();
  d.eat();
  d.bark();
}


// multilevel
{
  class Animal {
    eat() {
      console.log("Eating");
    }
  }

  class Dog extends Animal {
    bark() {
      console.log("Barking");
    }
  }

  class Puppy extends Dog {
    cry() {
      console.log("Crying");
    }
  }

  let p = new Puppy();
  p.eat();
  p.bark();
  p.cry();
}


// Hierarchical Inheritance
{
  class Animal {
    eat() {
      console.log("Eating");
    }
  }

  class Dog extends Animal {
    bark() {
      console.log("Barking");
    }
  }

  class Cat extends Animal {
    meow() {
      console.log("Meowing");
    }
  }

  let d = new Dog();
  d.eat();
  d.bark();

  let c = new Cat();
  c.eat();
  c.meow();
}


// Hybrid Inheritance
//          Animal
//          /    \
//        Dog    Cat
//        |
//      Puppy

{
  class Animal {
    eat() {
      console.log("Animal is eating");
    }
  }

  class Dog extends Animal {
    bark() {
      console.log("Dog is barking");
    }
  }

  class Cat extends Animal {
    meow() {
      console.log("Cat is meowing");
    }
  }

  class Puppy extends Dog {
    play() {
      console.log("Puppy is playing");
    }
  }

  let dog = new Dog();
  dog.eat();
  dog.bark();

  let cat = new Cat();
  cat.eat();
  cat.meow();

  let puppy = new Puppy();
  puppy.eat();
  puppy.bark();
  puppy.play();
}