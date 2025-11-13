// 1- Import reflect-metadata polyfill (required for metadata reflection)
import "reflect-metadata";

// 2- Define a metadata key (like a label to store data)
const metaKey = Symbol("info");

// 3- Property Decorator — adds metadata to a class property
function PropertyMetadata(info: string) {
  return function (target: Object, propertyKey: string | symbol) {
    Reflect.defineMetadata(metaKey, info, target, propertyKey);
  };
}

// 4- Example Class using metadata decorator
class Product {
  @PropertyMetadata("This is the product name.")
  name!: string;

  @PropertyMetadata("This is the product price in USD.")
  price!: number;
}

// 5- Reading Metadata
const product = new Product();

// 6- Retrieve metadata for each property
const nameMeta = Reflect.getMetadata(metaKey, product, "name");
const priceMeta = Reflect.getMetadata(metaKey, product, "price");

console.log("Metadata for 'name':", nameMeta);
console.log("Metadata for 'price':", priceMeta);

// Output:
// Metadata for 'name': This is the product name.
// Metadata for 'price': This is the product price in USD.

// ------------------------------------------------------------------

// 🧠 Explanation:
// 1- "reflect-metadata" allows storing/retrieving extra info (metadata)
//   about classes, methods, or properties.
// 2- Useful for frameworks like Angular, NestJS, or dependency injection systems.
