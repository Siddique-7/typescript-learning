// 1️- Basic Conditional Type
type IsString<T> = T extends string ? "Yes" : "No";

type Result1 = IsString<string>; // "Yes"
type Result2 = IsString<number>; // "No"
// Evaluates to "Yes" or "No" based on type matching

// 2️- Conditional Type with Interfaces
interface Dog {
  bark(): void;
}

interface Cat {
  meow(): void;
}

type AnimalSound<T> = T extends Dog ? "Bark" : "Meow";

type Sound1 = AnimalSound<Dog>; // "Bark"
type Sound2 = AnimalSound<Cat>; // "Meow"
// Works like if-else for types

// 3️- Conditional Type for Filtering
type ExtractString<T> = T extends string ? T : never;

type OnlyStrings = ExtractString<string | number | boolean>;
// Result: string

// 4️- Using infer Keyword (Type Inference in Conditional Types)
type ReturnTypeOf<T> = T extends (...args: any[]) => infer R ? R : never;

function greet() {
  return "Hello, world!";
}

type GreetReturn = ReturnTypeOf<typeof greet>; // string
// infer extracts the return type of a function

// 5️- Conditional Type for Promise Unwrapping
type UnwrapPromise<T> = T extends Promise<infer R> ? R : T;

type Resolved = UnwrapPromise<Promise<number>>; // number
type NonPromise = UnwrapPromise<string>; // string
// Unwraps Promise types — useful for async code

// 6️- Nested Conditional Types (Advanced Example)
type Flatten<T> = T extends any[] 
  ? T[number] extends (infer U)[]
    ? Flatten<U>
    : T[number]
  : T;

type DeepArray = number[][][]; // 3-level nested array
type Flat = Flatten<DeepArray>; // number
// Recursively flattens array types

// ================================================================================

// 🧠 Explanation (Step-by-step)

// 1️- Conditional types act like "if-else" for types in TypeScript.
// 2️- Syntax: T extends U ? X : Y
//     → If T is assignable to U, use X; otherwise, use Y.
// 3️- Useful for type filtering, inference, and transformations.
// 4️- `infer` allows extracting a type (like return type or generic).
// 5️- Often used with utility types (like ReturnType, Extract, Exclude, etc.).
// 💡 Conditional types make TypeScript’s type system dynamic and context-aware,
//     enabling smarter, reusable, and type-safe utilities.
