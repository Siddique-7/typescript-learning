// 1️- Basic Arrow Function — concise syntax and automatic return
const add = (a: number, b: number): number => a + b;
console.log(add(5, 7)); // Output: 12

// 2️- Arrow Function with Block Body — must explicitly use `return`
const multiply = (x: number, y: number): number => {
  return x * y;
};
console.log(multiply(3, 4)); // Output: 12

// 3️- Arrow Function with Default Parameters
const greet = (name: string = "Guest"): string => `Hello, ${name}!`;
console.log(greet());        // Output: Hello, Guest!
console.log(greet("Ali"));   // Output: Hello, Ali!

// 4️- Arrow Function with Optional Parameter
const logInfo = (message?: string): void => {
  console.log(message ? `${message}` : "No message provided");
};
logInfo("Learning Arrow Functions!");
logInfo(); // optional parameter not passed

// 5️- Arrow Function Returning Object Literal — wrap in parentheses!
const createUser = (name: string, age: number) => ({
  name,
  age,
  isActive: true,
});
console.log(createUser("Siddique", 21));
// Output: { name: 'Siddique', age: 21, isActive: true }

// 6️- Arrow Function with Array Methods — practical use
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

// 7️- Arrow Function with No Parameters
const sayHi = (): void => console.log("Hi from Arrow Function!");
sayHi();


// ============================================================================
// 🧠 Explanation (Step-by-step)
// ============================================================================

// 1️- Arrow functions are shorter function expressions (no `function` keyword).
// 2️- They automatically capture `this` from their surrounding context (lexical `this`).
// 3️- If using `{ }`, always include `return` to return a value.
// 4️- For returning object literals, wrap `{}` in parentheses `({ ... })`.
// 5️- Great for callbacks, array methods, and concise one-liners.
// 6️- Use explicit parameter types for clarity when needed — TS can infer them in most cases.
