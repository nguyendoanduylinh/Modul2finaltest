import { Product } from "./Product";

export class ProductManagement {
  private static _id = 0;
  private static _products: Product[] = [];

  findById(id: number): number {
    let index = -1;
    for (let i = 0; i < ProductManagement._products.length; i++) {
      if (ProductManagement._products[i].id === index) {
        index = i;
      }
    }
    return index;
  }

  returnProductfromId(id: number): Product | null {
    for (let product of ProductManagement._products) {
      if (product.id === id) {
        return product;
      }
    }
    return null;
  }

  getAll(): Product[] {
    return ProductManagement._products;
  }

  createNew(product: Product): void {
    ProductManagement._id++;
    product.id = ProductManagement._id;
    ProductManagement._products.push(product);
  }

  updateById(id: number, product: Product): void {
    let index = this.findById(id);
    if (index !== -1) {
      ProductManagement._products[index] = product;
    }
  }

  removeById(id: number) {
    let index = this.findById(id);
    if (index !== -1) {
      ProductManagement._products.splice(index, 1);
    }
  }

  findByName(name: string): Product | null {
    for (let product of ProductManagement._products) {
      if (product.name === name) {
        return product;
      }
    }
    return null;
  }
}
