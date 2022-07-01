"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductManagement = void 0;
class ProductManagement {
    findById(id) {
        let index = -1;
        for (let i = 0; i < ProductManagement._products.length; i++) {
            if (ProductManagement._products[i].id === index) {
                index = i;
            }
        }
        return index;
    }
    getAll() {
        return ProductManagement._products;
    }
    createNew(product) {
        ProductManagement._id++;
        product.id = ProductManagement._id;
        ProductManagement._products.push(product);
    }
    updateById(id, product) {
        let index = this.findById(id);
        if (index !== -1) {
            ProductManagement._products[index] = product;
        }
    }
    removeById(id) {
        let index = this.findById(id);
        if (index !== -1) {
            ProductManagement._products.splice(index, 1);
        }
    }
    findByName(name) {
        for (let product of ProductManagement._products) {
            if (product.name === name) {
                return product;
            }
        }
        return null;
    }
}
exports.ProductManagement = ProductManagement;
ProductManagement._id = 0;
ProductManagement._products = [];
