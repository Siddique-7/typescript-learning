// 1️- Basic Generic Function (identity)
function identity<T>(value: T): T {
  return value;
}

const num = identity<number>(42);
const str = identity<string>("hello");

console.log(num); // 42
console.log(str); // "hello"

// 2️- Generic Function with Type Inference (you usually don't need to pass <T>)
const inferredNum = identity(123); // T inferred as number
const inferredStr = identity("inferred"); // T inferred as string

console.log(inferredNum);
console.log(inferredStr);

// 3️- Generic Function with Constraint (requires a .length property)
interface HasLength {
  length: number;
}

function withLength<T extends HasLength>(arg: T): T {
  console.log("Length:", arg.length);
  return arg;
}

withLength("hello"); // Length: 5
withLength([1, 2, 3]); // Length: 3
// withLength(123); // Error — number doesn't have .length

// 4️- Generic Function with Keyof Constraint (safe property access)
function getProp<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user = { name: "Ravi", age: 24 };
console.log(getProp(user, "name")); // "Ravi"
// console.log(getProp(user, "unknown")); // Error — "unknown" not keyof user

// 5️- Generic Swap Function (multiple generics)
function swap<T, U>(a: T, b: U): [U, T] {
  return [b, a];
}

const swapped = swap(1, "one");
console.log(swapped); // ["one", 1]

// 6️- Generic Class
class Box<T> {
  private _contents: T;
  constructor(value: T) {
    this._contents = value;
  }

  public get contents(): T {
    return this._contents;
  }

  public set contents(value: T) {
    this._contents = value;
  }
}

const numberBox = new Box<number>(100);
console.log(numberBox.contents); // 100
numberBox.contents = 200;
console.log(numberBox.contents); // 200

// 7️- Generic Interface
interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
}

const res: ApiResponse<{ id: number; name: string }> = {
  success: true,
  data: { id: 1, name: "Alice" },
};

console.log(res.data.name); // "Alice"

// 8️- Generic with Default Type
function defaultValue<T = string>(value?: T): T | null {
  return value ?? null;
}

console.log(defaultValue()); // null (T defaults to string)
console.log(defaultValue<number>(10)); // 10

// ================================================================================

// 🧠 Explanation (Step-by-step)

// 1️- Basic Generic: `function identity<T>(value: T): T` lets the function work with any type T.
// 2️- Inference: TypeScript can usually infer T, so explicit generics are optional.
// 3️- Constraint: `T extends HasLength` ensures the argument has a `.length` property.
// 4️- keyof Constraint: `K extends keyof T` ensures the key exists on the object — safe property access.
// 5️- Multiple Generics: Functions and classes can use more than one generic type (T, U, ...).
// 6️- Generic Class: Classes can be generic to store typed values while preserving flexibility.
// 7️- Generic Interface: Useful for API responses, containers, etc., to keep types strict.
// 8️- Default Generic: `T = string` provides a fallback when the caller doesn't specify a type.

// 💡 Generics help write reusable, type-safe code — they let you abstract over types
//   while keeping compile-time checks and autocompletion in editors.
