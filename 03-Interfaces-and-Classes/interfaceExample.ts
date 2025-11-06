// 1️- Basic Object Interface Declaration
interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}

let user: User = {
  name: "Siddique",
  age: 22,
  isAdmin: true,
};

// Accessing properties
console.log(`${user.name} is ${user.age} years old.`);

// 2️- Optional and Readonly Properties
interface Product {
  id: number;
  name: string;
  price?: number; // optional property
  readonly category: string; // cannot be modified
}

let product: Product = {
  id: 101,
  name: "Laptop",
  category: "Electronics",
};

console.log(product);
// product.category = "Home"; ❌ Error — cannot modify readonly property

// 3️- Nested Interfaces
interface Address {
  city: string;
  zip: number;
}

interface Customer {
  name: string;
  address: Address;
}

let customer: Customer = {
  name: "Ali",
  address: {
    city: "Noida",
    zip: 201301,
  },
};

console.log(`${customer.name} lives in ${customer.address.city}`);

// 4️- Interface as Function Parameter Type
interface SimpleUser {
  name: string;
  age: number;
}

function printUser(user: SimpleUser): void {
  console.log(`${user.name} is ${user.age} years old.`);
}

printUser({ name: "Sameer", age: 25 });

// 5️- Using Interface for Reusability
interface Employee {
  id: number;
  name: string;
  role: string;
}

function promote(emp: Employee): void {
  console.log(`${emp.name} has been promoted to Senior ${emp.role}`);
}

promote({ id: 1, name: "Sara", role: "Developer" });

// 6️- Index Signatures (for flexible property names)
interface Scores {
  [subject: string]: number;
}

let studentScores: Scores = {
  math: 90,
  english: 85,
  science: 92,
};

console.log(studentScores["math"]); // 90

// 7️- Combining Interfaces (Extending)
interface Developer {
  name: string;
  skills: string[];
}

interface Manager {
  teamSize: number;
}

interface TechLead extends Developer, Manager {}

let lead: TechLead = {
  name: "John",
  skills: ["React", "Node", "TypeScript"],
  teamSize: 5,
};

console.log(`${lead.name} leads a team of ${lead.teamSize} developers.`);

// ================================================================================

// 🧠 Explanation (Step-by-step)

// 1️- Basic Interfaces: Define object structure with specific property names and their types.
// 2️- Optional (?) and Readonly: Optional allows missing props; readonly prevents modification.
// 3️- Nested Interfaces: You can nest one interface inside another for structured data.
// 4️- Function Parameters: Pass objects following a specific interface contract.
// 5️- Reusability: Interfaces make code modular and reusable across files.
// 6️- Index Signatures: Allow dynamic key-value structures like dictionaries.
// 7️- Extending Interfaces: Combine multiple object shapes into a single composite structure.
