// 1️- Basic Generic Interface
interface Box<T> {
  value: T;
}

const numberBox: Box<number> = { value: 42 };
const stringBox: Box<string> = { value: "TypeScript" };

console.log(numberBox.value); // 42
console.log(stringBox.value); // "TypeScript"

// 2️- Generic Interface with Function Type
interface PairCreator<T, U> {
  createPair: (x: T, y: U) => [T, U];
}

const pairMaker: PairCreator<string, number> = {
  createPair: (x, y) => [x, y],
};

console.log(pairMaker.createPair("age", 24)); // ["age", 24]

// 3️- Generic Interface for API Response
interface ApiResponse<T> {
  status: number;
  success: boolean;
  data: T;
}

const userResponse: ApiResponse<{ id: number; name: string }> = {
  status: 200,
  success: true,
  data: { id: 1, name: "Alice" },
};

console.log(userResponse.data.name); // "Alice"

// 4️- Generic Interface with Constraints
interface Lengthy {
  length: number;
}

interface WithLength<T extends Lengthy> {
  item: T;
  getLength(): number;
}

const stringLength: WithLength<string> = {
  item: "Hello",
  getLength() {
    return this.item.length;
  },
};

console.log(stringLength.getLength()); // 5

// 5️- Generic Interface with Multiple Type Parameters
interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

const pair1: KeyValuePair<string, number> = { key: "age", value: 25 };
const pair2: KeyValuePair<number, boolean> = { key: 1, value: true };

console.log(pair1, pair2);

// 6️- Generic Interface for Repository Pattern
interface Repository<T> {
  getAll(): T[];
  add(item: T): void;
}

class UserRepo implements Repository<{ id: number; name: string }> {
  private users: { id: number; name: string }[] = [];

  public getAll(): { id: number; name: string }[] {
    return this.users;
  }

  public add(user: { id: number; name: string }): void {
    this.users.push(user);
  }
}

const repo = new UserRepo();
repo.add({ id: 1, name: "Ravi" });
repo.add({ id: 2, name: "Aman" });

console.log(repo.getAll());

// 7️- Generic Interface with Default Type
interface Container<T = string> {
  value: T;
}

const defaultContainer: Container = { value: "default string" };
const numberContainer: Container<number> = { value: 123 };

console.log(defaultContainer, numberContainer);

// ================================================================================

// 🧠 Explanation (Step-by-step)

// 1️- Basic Generic Interface: `interface Box<T>` defines a type-safe container for any type T.
// 2️- Function Type in Interface: Generics make interfaces flexible for parameterized functions.
// 3️- API Response: `ApiResponse<T>` makes your backend responses reusable with any data type.
// 4️- Constraints: `T extends Lengthy` restricts types that must have a `.length` property.
// 5️- Multiple Generics: `KeyValuePair<K, V>` shows how to handle multiple type parameters.
// 6️- Repository Pattern: Real-world use of generics for reusable data storage structures.
// 7️- Default Generics: Provides a fallback type if none is specified by the user.
// 💡 Generics in interfaces make your TypeScript code more reusable, flexible,
//    and type-safe — ideal for building scalable applications with consistent data patterns.
