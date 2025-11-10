// 1️- Basic Namespace — Groups related functions together
namespace MathOperations {
  export function add(a: number, b: number): number {
    return a + b;
  }

  export function subtract(a: number, b: number): number {
    return a - b;
  }
}

// Usage
console.log(MathOperations.add(10, 5)); // 15
console.log(MathOperations.subtract(10, 5)); // 5

// 2️- Nested Namespaces — Grouping advanced functionalities under a main namespace
namespace MathOperations.Advanced {
  export function multiply(a: number, b: number): number {
    return a * b;
  }

  export function divide(a: number, b: number): number {
    return b !== 0 ? a / b : NaN;
  }
}

// Usage
console.log(MathOperations.Advanced.multiply(10, 5)); // 50
console.log(MathOperations.Advanced.divide(10, 5)); // 2

// 3️- Namespaces with Interfaces — Combining types and logic
namespace Geometry {
  export interface Shape {
    area(): number;
  }

  export class Circle implements Shape {
    constructor(private radius: number) {}
    area(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
}

// Usage
const circle = new Geometry.Circle(5);
console.log(circle.area()); // 78.53981633974483

// ================================================================================

// 🧠 Explanation (Step-by-step)

// 1️- A 'namespace' is a way to group related logic (functions, interfaces, classes)
//     under a single name — useful for avoiding name collisions in large codebases.
// 2️- Nested namespaces: help structure complex features or categories
//     (like MathOperations.Advanced).
// 3️- Everything inside a namespace needs to be 'exported' to be accessible outside it.
// 4️- Namespaces can contain 'interfaces, types, and classes' to define cohesive modules.
// 💡 Note: In modern TypeScript (with modules and imports/exports), namespaces are
//     rarely used in production — but they’re still helpful for learning or
//     organizing code in global-scope projects.

