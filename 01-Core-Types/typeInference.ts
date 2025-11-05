// 1️- Basic example — TypeScript automatically infers types
let username = "Siddique";   // inferred as string
let age = 24;               // inferred as number
let isDeveloper = true;    // inferred as boolean

// username = 101; ❌ Error: Type 'number' not assignable to type 'string'

// 2️- Type inference in functions
function add(a: number, b: number) {
  return a + b;   // TS infers return type as number
}

let sum = add(10, 5);
// sum = "15"; ❌ Error: Type 'string' not assignable to type 'number'

// 3️- Inference in arrays
let languages = ["TypeScript", "JavaScript", "React"]; // string[]
languages.push("Node.js");
// languages.push(101); ❌ Error

// 4️- Object type inference
let user = {
  name: "Ali",
  age: 30,
  isAdmin: false,
};
// user.name = 101; ❌ Error: inferred as string

// 5️- Function return type inference with objects
function createUser(name: string, age: number) {
  return { name, age }; // inferred return type { name: string; age: number }
}

const newUser = createUser("Sara", 22);

// 6️- Contextual typing — inference based on usage
window.addEventListener("click", (event) => {
  console.log(event.clientX, event.clientY);   // event inferred as MouseEvent
});

// 7️- Best practice: let TS infer types where clear, annotate where needed
function multiply(a: number, b: number): number {
  // here we explicitly define the return type for clarity
  return a * b;
}

//================================================================================

// 🧠 Explanation (Step-by-step)

// 1️- Type Inference: TypeScript automatically assigns a type based on the value.
//     Example: `let name = "Siddique"` → inferred as `string`.

// 2️- Function Inference: The return type is inferred from the function body.
//     TS determines it without explicit annotation unless you specify it.

// 3️- Arrays: The element type is inferred from the first assignment.
//     Example: `["a", "b"]` → `string[]`.

// 4️- Objects: Each property type is inferred automatically from its value.

// 5️- Contextual Typing: TS infers variable types based on context — like callbacks or DOM events.

// 6️- Best Practice: 
//     ✅ Let TypeScript infer types when obvious.  
//     🧩 Use explicit types when function signatures or intent need clarity.
