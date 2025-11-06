// 1️- Basic Object Type Declaration
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
};

let user: User = {
  name: "Siddique",
  age: 22,
  isAdmin: true,
};

// Accessing properties
console.log(`${user.name} is ${user.age} years old.`);

// 2️- Optional and Readonly Properties
type Product = {
  id: number;
  name: string;
  price?: number; // optional property
  readonly category: string; // cannot be modified
};

let product: Product = {
  id: 101,
  name: "Laptop",
  category: "Electronics",
};

console.log(product);
// product.category = "Home"; ❌ Error — cannot modify readonly property

// 3️- Nested Object Types
type Address = {
  city: string;
  zip: number;
};

type Customer = {
  name: string;
  address: Address;
};

let customer: Customer = {
  name: "Ali",
  address: {
    city: "Noida",
    zip: 201301,
  },
};

console.log(`${customer.name} lives in ${customer.address.city}`);

// 4️- Object in Functions (parameter type)
function printUser(user: { name: string; age: number }): void {
  console.log(`${user.name} is ${user.age} years old.`);
}

printUser({ name: "Sameer", age: 25 });

// 5️- Using Type Aliases for Objects
type Employee = {
  id: number;
  name: string;
  role: string;
};

function promote(emp: Employee): void {
  console.log(`${emp.name} has been promoted to Senior ${emp.role}`);
}

promote({ id: 1, name: "Sara", role: "Developer" });

// 6️- Index Signatures (for flexible property names)
type Scores = {
  [subject: string]: number;
};

let studentScores: Scores = {
  math: 90,
  english: 85,
  science: 92,
};

console.log(studentScores["math"]); // 90

// 7️- Combining Object Types (Intersection)
type Developer = {
  name: string;
  skills: string[];
};

type Manager = {
  teamSize: number;
};

type TechLead = Developer & Manager;

let lead: TechLead = {
  name: "John",
  skills: ["React", "Node", "TypeScript"],
  teamSize: 5,
};

console.log(`${lead.name} leads a team of ${lead.teamSize} developers.`);

// ================================================================================

// 🧠 Explanation (Step-by-step)

// 1️- Basic Object Types: Define specific property names and their types.
// 2️- Optional (?) and Readonly: Optional allows missing props; readonly prevents modification.
// 3️- Nested Objects: You can nest one type inside another for structured data.
// 4️- Function Parameters: Define object shapes directly in function signatures.
// 5️- Type Aliases: Reuse object structures across multiple functions or files.
// 6️- Index Signatures: Allow objects with dynamic keys (like dictionary-style data).
// 7️- Intersection Types: Merge multiple object types into one combined structure.
