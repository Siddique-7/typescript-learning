// 1️- Explicit type annotations
let userName: string = "Siddique";
let userAge: number = 21;
let isLoggedIn: boolean = true;

// 2️- Type inference (TypeScript can infer types automatically)
let language = "TypeScript"; // inferred as string
let level = 1;               // inferred as number

// 3️- Arrays
let skills: string[] = ["JavaScript", "React", "Node"];
let scores: number[] = [90, 85, 78];

// 4️- Objects with type annotations
let user: { name: string; age: number; isAdmin: boolean } = {
  name: "Siddique",
  age: 21,
  isAdmin: false
};

// 5️- 'any' type — disables type checking (use carefully)
let randomValue: any = 10;
randomValue = "hello";
randomValue = { key: "value" };

// 6️- Function with type annotations
function greet(name: string, age: number): string {
  return `Hello ${name}, you are ${age} years old.`;
}

console.log(greet(userName, userAge));

// 7️- Union type example (value can be string or number)
let id: string | number = 101;
id = "A102";

// 8️- Type alias for reuse
type User = { name: string; age: number; isAdmin: boolean };

let newUser: User = {
  name: "Ali",
  age: 25,
  isAdmin: true
};

// 9️- Literal types (restrict to specific values)
let role: "admin" | "editor" | "viewer" = "admin";

//===============================================================================

// 🧠 Explanation (Step-by-step)

// 1- Explicit Types:	You manually specify variable types (let name: string = "abc"). Helps catch errors early.

// 2- Type Inference:	TypeScript automatically detects type based on the assigned value (let age = 20 → inferred as number).

// 3- Arrays:	Declared with string[] or number[] — ensures all elements follow the same type.

// 4- Objects:	Type structure is declared inside {} braces to ensure property correctness.

// 5- any:	Disables TypeScript’s type safety — avoid using it often. It defeats the purpose of TypeScript.

// 6- Functions:	Both parameter and return types are declared ((name: string): string).

// 7- Union Types:	Allows multiple possible types (e.g., `string

// 8- Type Aliases:	Let you define custom reusable types (e.g., type User = { ... }).

// 9- Literal Types:	Restrict values to a few allowed strings or numbers.