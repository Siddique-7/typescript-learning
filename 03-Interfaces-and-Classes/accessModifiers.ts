// 1️- Public Modifier (accessible anywhere)
class Person {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public greet(): void {
    console.log(`Hello, my name is ${this.name}`);
  }
}

let person1 = new Person("Alice", 25);
console.log(person1.name); // Accessible
person1.greet();

// 2️- Private Modifier (accessible only inside the class)
class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  public deposit(amount: number): void {
    this.balance += amount;
  }

  public getBalance(): number {
    return this.balance;
  }
}

let account = new BankAccount(1000);
// console.log(account.balance); // Error — private property
account.deposit(500);
console.log(account.getBalance()); // 1500

// 3️- Protected Modifier (accessible in class + subclasses)
class Employee {
  protected salary: number;

  constructor(salary: number) {
    this.salary = salary;
  }
}

class Manager extends Employee {
  public showSalary(): void {
    console.log(`Manager salary: ${this.salary}`);
  }
}

let manager = new Manager(5000);
// console.log(manager.salary); // Error — protected property
manager.showSalary(); // Works fine

// ================================================================================

// 🧠 Explanation (Step-by-step)

// 1️- Public: Members are accessible everywhere (inside and outside the class).
// 2️- Private: Members are accessible only within the same class.
// 3️- Protected: Members are accessible within the class and its derived (child) classes.
// 💡 Access modifiers help in encapsulation — controlling data visibility and improving code safety.
