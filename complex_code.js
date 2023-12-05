/* complex_code.js */

// This code demonstrates a sophisticated and elaborate implementation of a fictional online shopping website.

// Define the Product class
class Product {
  constructor(id, name, price, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getTotalPrice() {
    return this.price * this.quantity;
  }
}

// Create an array to store the available products
let products = [];

// Add some sample products to the array
products.push(new Product(1, "Phone", 499.99, 10));
products.push(new Product(2, "Laptop", 1299.99, 5));
products.push(new Product(3, "Headphones", 99.99, 20));
// ... add more products here

// Define the ShoppingCart class
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(product, quantity) {
    // Check if the product already exists in the shopping cart
    let existingItem = this.items.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity
      });
    }
  }

  removeItem(productId) {
    // Find the index of the product in the shopping cart
    let index = this.items.findIndex(item => item.id === productId);

    // Remove the product if found
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  getTotalPrice() {
    let totalPrice = 0;

    // Calculate the total price by iterating over all items in the shopping cart
    for (let item of this.items) {
      totalPrice += item.price * item.quantity;
    }

    return totalPrice;
  }
}

// Create a new instance of the ShoppingCart class
let cart = new ShoppingCart();

// Add some products to the shopping cart
cart.addItem(products[0], 2);
cart.addItem(products[1], 1);
cart.addItem(products[2], 5);
// ... add more products to the cart

// Remove a product from the shopping cart
cart.removeItem(2);

// Output the total price of the shopping cart
console.log("Total Price:", cart.getTotalPrice());

// Output the details of each item in the shopping cart
console.log("Shopping Cart Items:");
for (let item of cart.items) {
  console.log(`Product: ${item.name}, Quantity: ${item.quantity}`);
}