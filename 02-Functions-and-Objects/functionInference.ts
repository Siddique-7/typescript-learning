// 1️- Basic function — TypeScript automatically infers parameter and return types
function add(a: number, b: number) {
  return a + b; // inferred return type → number
}

console.log(add(10, 5)); // Output: 15

// 2️- Arrow function — return type is inferred automatically
const multiply = (x: number, y: number) => x * y; // inferred → number
console.log(multiply(4, 3)); // Output: 12

// 3️- Inference from context — TS can infer types from assigned variables
const subtract: (x: number, y: number) => number = (x, y) => x - y;
console.log(subtract(9, 2)); // Output: 7

// 4️- Default parameters — TS infers parameter types even when defaults are used
function greet(name = "Guest") {
  return `Hello, ${name}!`; // inferred return type → string
}

console.log(greet());        // Output: Hello, Guest!
console.log(greet("Ali"));   // Output: Hello, Ali!

// 5️- Void return type — no value returned, inferred as `void`
function logMessage(message: string): void {
  console.log(`${message}`);
}

logMessage("TypeScript infers function return types automatically!");

// 6️- Function returning union type — TS infers type from return branches
function getValue(flag: boolean) {
  if (flag) return "TS";  // string
  return 101;             // number
}

let result = getValue(true); // inferred as string | number
console.log(result);


// ============================================================================
// 🧠 Explanation (Step-by-step)
// ============================================================================

// 1️- Function Inference: TypeScript automatically determines return types based on the return statement.
// 2️- Arrow Functions: TS infers the return type directly from the expression after the arrow (=>).
// 3️- Contextual Typing: When a function is assigned to a typed variable, TS infers the parameter types too.
// 4️- Default Parameters: TS infers types from default values (e.g., name = "Guest" → string).
// 5️- Void Return: If a function has no return statement, TS infers the return type as `void`.
// 6️- Union Return: When a function can return different types, TS infers a union type (e.g., string | number).
