// 1️- Basic Mapped Type (Transform all properties of an interface)
interface Person {
  name: string;
  age: number;
  city: string;
}

// Make all properties optional
type OptionalPerson = {
  [Key in keyof Person]?: Person[Key];
};

const person1: OptionalPerson = {
  name: "Alice",
};
// Works fine — all properties are optional now

// 2️- Readonly Mapped Type (Make all properties read-only)
type ReadonlyPerson = {
  readonly [Key in keyof Person]: Person[Key];
};

const person2: ReadonlyPerson = {
  name: "Bob",
  age: 30,
  city: "Delhi",
};

// person2.age = 35; Error — cannot modify a readonly property

// 3️- Generic Mapped Type (Reusable type transformation)
type MyPartial<T> = {
  [Key in keyof T]?: T[Key];
};

interface Product {
  id: number;
  name: string;
  price: number;
}

const partialProduct: MyPartial<Product> = {
  name: "Laptop",
};
// Custom Partial type using mapped types

// 4️- Mapping with Conditional Types
type Nullable<T> = {
  [Key in keyof T]: T[Key] | null;
};

interface User {
  username: string;
  email: string;
}

const user1: Nullable<User> = {
  username: null,
  email: "john@example.com",
};
// Each property can now be its type or null

// 5️- Key Remapping (Using "as" in mapped types)
type RenameKeys<T> = {
  [K in keyof T as `new_${string & K}`]: T[K];
};

interface Car {
  model: string;
  year: number;
}

const myCar: RenameKeys<Car> = {
  new_model: "Tesla",
  new_year: 2024,
};
// Property names changed dynamically using key remapping

// ================================================================================

// 🧠 Explanation (Step-by-step)

// 1️- Mapped types let you iterate over keys of another type or interface.
// 2️- You can modify properties (make them optional, readonly, or nullable).
// 3️- You can create reusable generic types using `[Key in keyof T]`.
// 4️- Conditional logic and key remapping make them extremely powerful.
// 💡 Mapped types = TypeScript’s way to programmatically create new types
//    based on existing ones, improving flexibility and code reuse.
