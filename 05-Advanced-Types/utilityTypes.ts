// 1️- Partial<Type> (Makes all properties optional)
interface User {
  name: string;
  age: number;
  email: string;
}

let partialUser: Partial<User> = {
  name: "Alice",
};
// Works fine — 'age' and 'email' are optional now

// 2️- Required<Type> (Makes all properties required)
interface Profile {
  username?: string;
  bio?: string;
}

let fullProfile: Required<Profile> = {
  username: "john_doe",
  bio: "Software Engineer",
};
// If you remove 'bio', TypeScript will throw an error — now both fields are required

// 3️- Readonly<Type> (Makes all properties read-only)
interface Todo {
  title: string;
  description: string;
}

let todo: Readonly<Todo> = {
  title: "Learn TypeScript",
  description: "Understand utility types deeply",
};

// todo.title = "Learn React"; Error — cannot modify a readonly property

// 4️- Record<Keys, Type> (Creates an object type with specific keys and value type)
type Roles = "admin" | "user" | "guest";

const userRoles: Record<Roles, string> = {
  admin: "Full Access",
  user: "Limited Access",
  guest: "Read Only",
};

// 5️- Pick<Type, Keys> (Selects specific keys from a type)
interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

type ProductPreview = Pick<Product, "id" | "name">;

const preview: ProductPreview = {
  id: 1,
  name: "Laptop",
};
// Only 'id' and 'name' allowed

// 6️- Omit<Type, Keys> (Excludes specific keys from a type)
type ProductWithoutStock = Omit<Product, "stock">;

const newProduct: ProductWithoutStock = {
  id: 2,
  name: "Phone",
  price: 999,
};
// 'stock' field is not allowed here

// ================================================================================

// 🧠 Explanation (Step-by-step)

// 1️- Partial<Type> — Makes all properties optional.
// 2️- Required<Type> — Makes all properties mandatory.
// 3️- Readonly<Type> — Prevents modification of object properties.
// 4️- Record<Keys, Type> — Defines a type with a fixed set of keys and a consistent value type.
// 5️- Pick<Type, Keys> — Extracts a subset of properties from a type.
// 6️- Omit<Type, Keys> — Removes specific properties from a type.
// 💡 Utility types help you quickly transform existing interfaces or types
//    without redefining them, improving flexibility and maintainability.
