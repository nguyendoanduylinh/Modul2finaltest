import * as rl from "readline-sync";
import { Product } from "./Product";
import { ProductManagement } from "./product-management";

export class ProductMenu {
  private productManagement = new ProductManagement();
  private products = this.productManagement.getAll();

  createNewProductInfo(): Product {
    let name = rl.question(`Insert product name: `);
    let type = rl.question(`Insert product type: `);
    let price = +rl.question(`Insert product price: `);
    let quantity = +rl.question(`Insert product quantity: `);
    let date = rl.question(`Insert product date: `);
    let description = rl.question(`Insert product description: `);
    return new Product(name, type, price, quantity, date, description);
  }

  addNewProducts() {
    let product = this.createNewProductInfo();
    this.productManagement.createNew(product);
  }

  consoleProductInfo(product: Product) {
    console.log(
      `\nId: ${product.id}. Name: ${product.name}. Type: ${product.type}.\nPrice: ${product.price}. Quantity: ${product.quantity}. Date: ${product.date}\nDescription: ${product.description}`
    );
  }

  findByName(name: string) {
    let currentProduct = this.productManagement.findByName(name);
    if (currentProduct) {
      this.consoleProductInfo(currentProduct);
    } else {
      console.log(`PRODUCT NOT FOUND.`);
    }
  }

  showAllProducts() {
    if (this.products.length === 0) {
      console.log("PRODUCT LIST EMPTY");
    } else {
      for (let product of this.products) {
        this.consoleProductInfo(product);
      }
    }
  }

  updateProductById(id: number): void {
    let product = this.productManagement.returnProductfromId(id);
    if (product) {
      let updateproduct = this.createNewProductInfo();
      this.productManagement.updateById(id, updateproduct);
    } else {
      console.log("PRODUCT NOT FOUND");
    }
  }

  removeProductById(id: number): void {
    let product = this.productManagement.returnProductfromId(id);
    if (product) {
      this.productManagement.removeById(id);
    } else {
      console.log("PRODUCT NOT FOUND");
    }
  }

  run() {
    let choice = -1;
    enum ProductChoice {
      ADD_NEW = 1,
      FIND_BY_NAME = 2,
      SHOW_ALL = 3,
      UPDATE_BY_ID = 4,
      REMOVE_BY_ID = 5,
    }
    do {
      console.log(`\n---PRODUCT MANAGEMENT SYSTEM---`);
      console.log(`1. Add new product.`);
      console.log(`2. Find product by name.`);
      console.log(`3. Show all products.`);
      console.log(`4. Update product by Id.`);
      console.log(`5. Remove product by Id.`);
      console.log(`0. Exit.`);
      choice = +rl.question("Input choice: ");
      switch (choice) {
        case ProductChoice.ADD_NEW: {
          console.log(`\n---Add new products---`);
          this.addNewProducts;
        }
        case ProductChoice.FIND_BY_NAME: {
          console.log(`\n---Find product by name---`);
          let name = rl.question(`Insert name: `);
          this.findByName(name);
        }
        case ProductChoice.SHOW_ALL: {
          console.log(`\n---Show all products---`);
          this.showAllProducts();
        }
        case ProductChoice.UPDATE_BY_ID: {
          console.log(`\n---Update product by Id---`);
          this.showAllProducts();
          let id = +rl.question(`Insert product id: `);
          this.updateProductById(id);
        }
        case ProductChoice.REMOVE_BY_ID: {
          console.log(`\n---Remove product by Id---`);
          this.showAllProducts();
          let id = +rl.question(`Insert product id: `);
          this.removeProductById(id);
        }
      }
    } while (choice !== 0);
  }
}
