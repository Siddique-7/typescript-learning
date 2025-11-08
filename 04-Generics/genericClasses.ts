// 1️- Basic Generic Class
class Box<T> {
  private content: T;

  constructor(value: T) {
    this.content = value;
  }

  public getContent(): T {
    return this.content;
  }

  public setContent(value: T): void {
    this.content = value;
  }
}

let numberBox = new Box<number>(123);
console.log(numberBox.getContent()); // 123

let stringBox = new Box<string>("Hello");
console.log(stringBox.getContent()); // "Hello"


// 2️- Generic Class with Multiple Type Parameters
class Pair<K, V> {
  constructor(public key: K, public value: V) {}

  public display(): void {
    console.log(`Key: ${this.key}, Value: ${this.value}`);
  }
}

let pair1 = new Pair<string, number>("Age", 25);
pair1.display(); // Key: Age, Value: 25

let pair2 = new Pair<number, boolean>(1, true);
pair2.display(); // Key: 1, Value: true


// 3️- Generic Class with Constraints (extends)
interface Identifiable {
  id: number;
}

class DataStore<T extends Identifiable> {
  private items: T[] = [];

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getItemById(id: number): T | undefined {
    return this.items.find(item => item.id === id);
  }
}

type User = { id: number; name: string };

let store = new DataStore<User>();
store.addItem({ id: 1, name: "Alice" });
store.addItem({ id: 2, name: "Bob" });

console.log(store.getItemById(1)); // { id: 1, name: 'Alice' }


// ================================================================================

// 🧠 Explanation (Step-by-step)

// 1️- Basic Generic Class: A class that works with any type. `Box<T>` can hold a value of any data type.
// 2️- Multiple Type Parameters: You can define more than one type parameter (like <K, V>) to make the class more flexible.
// 3️- Generic Constraints: You can limit which types are allowed using `extends`. For example, `T extends Identifiable` ensures that the type has an `id` property.
// 💡 Generic classes help make code reusable, type-safe, and flexible across different data types.
