// 1️- Basic Class Decorator (Logs class creation)
function Logger(constructor: Function) {
  console.log(`Class created: ${constructor.name}`);
}

@Logger
class Person {
  constructor(public name: string, public age: number) {}
}

const p1 = new Person("Alice", 25);

// 2️- Decorator Factory (Custom message)
function LogMessage(message: string) {
  return function (constructor: Function) {
    console.log(`${message} -> ${constructor.name}`);
  };
}

@LogMessage("Creating a Product class")
class Product {
  constructor(public id: number, public name: string) {}
}

const prod1 = new Product(1, "Laptop");

// 3️- Class Decorator that Modifies Behavior
function Sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
  console.log(`${constructor.name} is sealed (no modifications allowed).`);
}

@Sealed
class Car {
  constructor(public brand: string) {}
}

const c1 = new Car("Tesla");
// Object.defineProperty(Car, "newProp", { value: "X" }); Error — sealed class

// 4️- Multiple Decorators (Executed Bottom → Top)
function DecoratorA(constructor: Function) {
  console.log("Decorator A executed");
}

function DecoratorB(constructor: Function) {
  console.log("Decorator B executed");
}

@DecoratorA
@DecoratorB
class ExampleClass {}

const ex = new ExampleClass();

// ================================================================================

// 🧠 Explanation (Step-by-step)

// 1️- Decorators are special functions that can modify classes, methods, or properties.
// 2️- A basic class decorator receives the class constructor as its argument.
// 3️- You can use a decorator factory (a function returning a decorator) for dynamic      messages or config.
// 4️- Decorators can modify or seal class behavior for better control.
// 5️- When multiple decorators are applied, they execute in reverse order (bottom → top).
// 💡 Decorators are mostly used in frameworks like Angular and NestJS 
//    for dependency injection, metadata, and declarative programming.
