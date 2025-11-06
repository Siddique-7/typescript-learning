// 1️- Base Class
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak(): void {
    console.log(`${this.name} makes a sound.`);
  }
}

const animal1 = new Animal("Generic Animal");
animal1.speak(); // Generic Animal makes a sound.

// 2️- Single-level Inheritance
class Dog extends Animal {
  breed: string;

  constructor(name: string, breed: string) {
    super(name); // Call base class constructor
    this.breed = breed;
  }

  speak(): void {
    console.log(`${this.name} barks!`);
  }
}

const dog1 = new Dog("Buddy", "Golden Retriever");
dog1.speak(); // Buddy barks!

// 3️- Multi-level Inheritance
class GuideDog extends Dog {
  isTrained: boolean;

  constructor(name: string, breed: string, isTrained: boolean) {
    super(name, breed);
    this.isTrained = isTrained;
  }

  guide(): void {
    if (this.isTrained) console.log(`${this.name} is guiding.`);
    else console.log(`${this.name} is not trained yet.`);
  }
}

const guideDog1 = new GuideDog("Max", "Labrador", true);
guideDog1.speak(); // Max barks!
guideDog1.guide(); // Max is guiding.

// 4️- Protected Properties
class Vehicle {
  protected speed: number;

  constructor(speed: number) {
    this.speed = speed;
  }
}

class Car extends Vehicle {
  brand: string;

  constructor(brand: string, speed: number) {
    super(speed);
    this.brand = brand;
  }

  showSpeed(): void {
    console.log(`${this.brand} is moving at ${this.speed} km/h`);
  }
}

const car1 = new Car("Tesla", 120);
car1.showSpeed(); // Tesla is moving at 120 km/h
// console.log(car1.speed); ❌ Error: protected property not accessible outside class hierarchy

// ================================================================================
// 🧠 Explanation (Step-by-step)

// 1️- Base Class: Parent class with shared properties/methods.
// 2️- Single-level Inheritance: Child class extends parent, overrides or adds methods.
// 3️- Multi-level Inheritance: Classes can extend other subclasses forming hierarchy.
// 4️- Protected Properties: Accessible in subclasses but not outside hierarchy.
