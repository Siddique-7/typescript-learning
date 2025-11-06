// 1️- Basic Class Declaration
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person1 = new Person("Siddique", 22);
person1.greet(); // Hello, my name is Siddique and I am 22 years old.

// 2️- Inheritance
class Employee extends Person {
  role: string;

  constructor(name: string, age: number, role: string) {
    super(name, age);
    this.role = role;
  }

  work(): void {
    console.log(`${this.name} is working as a ${this.role}`);
  }
}

const emp1 = new Employee("Sara", 25, "Developer");
emp1.greet(); // Inherited method
emp1.work();  // Sara is working as a Developer

// 3️- Access Modifiers
class BankAccount {
  private balance: number; // private → accessible only inside class
  protected accountNumber: string; // protected → accessible in subclass
  public owner: string; // public → accessible everywhere

  constructor(owner: string, balance: number, accountNumber: string) {
    this.owner = owner;
    this.balance = balance;
    this.accountNumber = accountNumber;
  }

  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Deposited ${amount}. New balance: ${this.balance}`);
  }

  getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount("Ali", 1000, "12345");
account.deposit(500); // Deposited 500. New balance: 1500
console.log(account.getBalance()); // 1500
// console.log(account.balance); ❌ Error, private property

// 4️- Getters and Setters
class Rectangle {
  private _width: number;
  private _height: number;

  constructor(width: number, height: number) {
    this._width = width;
    this._height = height;
  }

  get area(): number {
    return this._width * this._height;
  }

  set width(value: number) {
    if (value > 0) this._width = value;
  }
}

const rect = new Rectangle(10, 5);
console.log(rect.area); // 50
rect.width = 20;
console.log(rect.area); // 100

// ================================================================================
// 🧠 Explanation (Step-by-step)

// 1️- Basic Class: Defines properties and methods; instantiated with `new`.
// 2️- Inheritance: Extends a class, inherits methods/properties, adds new functionality.
// 3️- Access Modifiers: control property/method visibility (private, protected, public).
// 4️- Getters/Setters: Controlled access to private properties with computed logic.
