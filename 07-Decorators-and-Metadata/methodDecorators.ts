// 1️⃣ - Basic Method Decorator (Logs method calls)
function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`📞 Calling: ${propertyKey}() with args:`, args);
    const result = originalMethod.apply(this, args);
    console.log(`✅ Result: ${result}`);
    return result;
  };

  return descriptor;
}

class Calculator {
  @Log
  add(a: number, b: number): number {
    return a + b;
  }

  @Log
  multiply(a: number, b: number): number {
    return a * b;
  }
}

const calc = new Calculator();
calc.add(10, 5);
calc.multiply(4, 3);

// ================================================================================

// 2️⃣ - Method Decorator for Access Control (authorization simulation)
function AdminOnly(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    if ((this as any).role !== "admin") {
      console.log(`❌ Access Denied: ${propertyKey}() is admin-only`);
      return;
    }
    console.log(`🔐 Access Granted: Executing ${propertyKey}()`);
    return originalMethod.apply(this, args);
  };

  return descriptor;
}

class UserService {
  role: string;

  constructor(role: string) {
    this.role = role;
  }

  @AdminOnly
  deleteUser(id: number) {
    console.log(`🗑️ User with ID ${id} deleted`);
  }
}

const admin = new UserService("admin");
const guest = new UserService("guest");

admin.deleteUser(1); // Access Granted
guest.deleteUser(2); // Access Denied

// ================================================================================

// 3️⃣ - Method Decorator with Metadata Injection (execution time)
function MeasureExecutionTime(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = async function (...args: any[]) {
    const start = performance.now();
    const result = await originalMethod.apply(this, args);
    const end = performance.now();
    console.log(`⏱️ ${propertyKey} executed in ${(end - start).toFixed(2)}ms`);
    return result;
  };

  return descriptor;
}

class DataFetcher {
  @MeasureExecutionTime
  async fetchData() {
    return new Promise((resolve) => setTimeout(() => resolve("📦 Data Loaded"), 1000));
  }
}

const fetcher = new DataFetcher();
fetcher.fetchData();

// ================================================================================

// 🧠 Explanation (Step-by-step)

// 1️⃣ - Method Decorators wrap or replace the original method's behavior.
// 2️⃣ - They have access to:
//      • target → The class prototype
//      • propertyKey → The name of the decorated method
//      • descriptor → Method’s PropertyDescriptor (used to override behavior)
// 3️⃣ - Common Use Cases:
//      • Logging and debugging
//      • Access control and permission checks
//      • Performance monitoring
//      • Input validation
// 💡 Method decorators enhance reusability and add cross-cutting features cleanly.
