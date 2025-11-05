// 1️- Basic example — combining multiple types into one
type Person = { name: string; age: number };
type Employee = { employeeId: number; department: string };

let worker: Person & Employee = {
  name: "Siddique",
  age: 24,
  employeeId: 101,
  department: "Engineering",
};

// 2️- Function parameter using intersection type
function printEmployeeDetails(emp: Person & Employee): void {
  console.log(`${emp.name} (Age: ${emp.age}) works in ${emp.department} dept.`);
}

printEmployeeDetails(worker);

// 3️- Intersection with optional properties
type ContactInfo = { email?: string; phone?: string };

type FullEmployee = Person & Employee & ContactInfo;

const manager: FullEmployee = {
  name: "Ali",
  age: 30,
  employeeId: 202,
  department: "HR",
  email: "ali@example.com",
};

// 4️- Intersection with union types inside
type Admin = { role: "admin"; accessLevel: number };
type Developer = { role: "dev"; languages: string[] };

type TechLead = Person & (Admin | Developer);

const lead1: TechLead = {
  name: "Sara",
  age: 27,
  role: "admin",
  accessLevel: 5,
};

const lead2: TechLead = {
  name: "Omar",
  age: 29,
  role: "dev",
  languages: ["TypeScript", "React", "Node.js"],
};

// 5️- Intersection enforcing shared structure
type Address = { city: string; country: string };
type Company = { companyName: string; location: Address };

let employeeProfile: Person & Company = {
  name: "Zain",
  age: 25,
  companyName: "TechVerse",
  location: { city: "Noida", country: "India" },
};

//================================================================================

// 🧠 Explanation (Step-by-step)

// 1️- Intersection Types (`&`): Combine multiple type definitions into one.  
//     All properties from every type must be present.

// 2️- Use Case: When you want an object that must satisfy multiple type contracts at once.  

// 3️- Optional Properties: Works smoothly with intersections; optional keys remain optional.  

// 4️- Intersections + Unions: Can mix for advanced typing, e.g., `(Admin | Developer)` combined with `Person`.  

// 5️- Shared Structure: Enforces strong typing across multiple entities that share certain fields.  

// ✅ Think of `|` (union) as “either this or that”  
//    and `&` (intersection) as “must be both”.
