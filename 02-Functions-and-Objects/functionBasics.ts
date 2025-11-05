// 1️- Basic function declaration with typed parameters and return type
function addNumbers(a: number, b: number): number {
  return a + b;
}
console.log(addNumbers(5, 10)); // 15

// 2️- Function with 'void' return type (no return value)
function logMessage(message: string): void {
  console.log("📢 Message:", message);
}
logMessage("Learning TypeScript functions!");

// 3️- Optional parameters — marked with '?'
function greetUser(name: string, age?: number): string {
  if (age) return `Hello ${name}, you are ${age} years old.`;
  return `Hello ${name}!`;
}
console.log(greetUser("Siddique"));
console.log(greetUser("Ali", 22));

// 4️- Default parameters — used when no argument is passed
function calculatePrice(price: number, tax: number = 0.18): number {
  return price + price * tax;
}
console.log(calculatePrice(100));    // 118
console.log(calculatePrice(100, 0.25)); // 125

// 5️- Function expressions (anonymous function assigned to variable)
const multiply = function (x: number, y: number): number {
  return x * y;
};
console.log(multiply(3, 4)); // 12

// 6️- Arrow function (short and modern syntax)
const divide = (a: number, b: number): number => a / b;
console.log(divide(20, 5)); // 4

// 7️- Function returning another function — higher-order function
function makeMultiplier(factor: number): (value: number) => number {
  return function (value: number) {
    return value * factor;
  };
}
const double = makeMultiplier(2);
console.log(double(10)); // 20

// 8️- Function type alias — reusable function signature
type MathOperation = (x: number, y: number) => number;

const subtract: MathOperation = (a, b) => a - b;
console.log(subtract(10, 6)); // 4

//================================================================================

// 🧠 Explanation (Step-by-step)

// 1️- Function Types: You explicitly define parameter and return types for type safety.
// 2️- Void: Used for functions that don’t return any value (like console.log).
// 3️- Optional Parameters: Add “?” after a parameter name to make it optional.
// 4️- Default Parameters: Provide default values that apply when no argument is passed.
// 5️- Function Expressions: Store functions in variables — useful for callbacks.
// 6️- Arrow Functions: Shorter syntax, automatically bind “this” context in classes.
// 7️- Higher-Order Functions: Functions that return or accept other functions.
// 8️- Function Type Alias: Define a reusable structure for consistent function signatures.
