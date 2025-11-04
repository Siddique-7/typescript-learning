// 1️- Basic example — a variable that can hold more than one type
let userId: string | number;
userId = 101;
userId = "A102"; // both valid

// 2️- Function parameter with union type
function printId(id: string | number): void {
  console.log(`User ID: ${id}`);
}

printId(123);
printId("XYZ-456");

// 3️- Using type narrowing — TypeScript checks the actual type at runtime
function getIdLength(id: string | number): number {
  if (typeof id === "string") {
    // inside this block, id is treated as string
    return id.length;
  } else {
    // here, id is treated as number
    return id.toString().length;
  }
}

console.log(getIdLength("TS101")); // 5
console.log(getIdLength(404));     // 3

// 4️- Unions in arrays
let mixedArray: (string | number)[] = ["TS", 2025, "JS", 101];
mixedArray.push("Node");
mixedArray.push(500);

// 5️- Type alias with union type
type Status = "active" | "inactive" | "pending";

let currentStatus: Status = "active";
currentStatus = "pending";
// currentStatus = "deleted"; ❌ Error: not part of allowed literals

// 6️- Combining unions with custom object types
type Admin = { name: string; role: "admin" };
type User = { name: string; role: "user" };

function showRole(person: Admin | User): void {
  console.log(`${person.name} is a ${person.role}`);
}

showRole({ name: "Siddique", role: "admin" });
showRole({ name: "Ali", role: "user" });

//================================================================================

// 🧠 Explanation (Step-by-step)

// 1️- Union Types: The (|) allows multiple types for a single variable — for example, `string | number` means it can store either.

// 2️- Function Parameters: Functions can accept multiple input types using union types, making them flexible and reusable.

// 3️- Type Narrowing: TS uses runtime checks (like typeof) to safely handle operations depending on the actual type.

// 4️- Union Arrays: Define mixed-type arrays with (string | number)[] to allow elements of multiple types.

// 5️- Type Alias + Literal Types: You can create reusable custom unions. Literal types restrict values to a few allowed options.

// 6️- Union with Objects: Combine object structures using unions to ensure flexibility while keeping strict type safety.