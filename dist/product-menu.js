"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductMenu = void 0;
const rl = __importStar(require("readline-sync"));
const Product_1 = require("./Product");
const product_management_1 = require("./product-management");
class ProductMenu {
    constructor() {
        this.productManagement = new product_management_1.ProductManagement();
        this.products = this.productManagement.getAll();
    }
    createNewProductInfo() {
        let name = rl.question(`Insert product name: `);
        let type = rl.question(`Insert product type: `);
        let price = +rl.question(`Insert product price: `);
        let quantity = +rl.question(`Insert product quantity: `);
        let date = rl.question(`Insert product date: `);
        let description = rl.question(`Insert product description: `);
        return new Product_1.Product(name, type, price, quantity, date, description);
    }
    addNewProducts() {
        let product = this.createNewProductInfo();
        this.productManagement.createNew(product);
    }
    consoleProductInfo(product) {
        console.log(`\nId: ${product.id}. Name: ${product.name}. Type: ${product.type}.\nPrice: ${product.price}. Quantity: ${product.quantity}. Date: ${product.date}\nDescription: ${product.description}`);
    }
    findByName(name) {
        let currentProduct = this.productManagement.findByName(name);
        if (currentProduct) {
            this.consoleProductInfo(currentProduct);
        }
        else {
            console.log(`PRODUCT NOT FOUND.`);
        }
    }
    showAllProducts() {
        for (let product of this.products) {
            this.consoleProductInfo(product);
        }
    }
    updateProductById(id) {
        let updateproduct = this.createNewProductInfo();
        this.productManagement.updateById(id, updateproduct);
    }
    run() {
        let choice = -1;
        let ProductChoice;
        (function (ProductChoice) {
            ProductChoice[ProductChoice["ADD_NEW"] = 1] = "ADD_NEW";
            ProductChoice[ProductChoice["FIND_BY_NAME"] = 2] = "FIND_BY_NAME";
            ProductChoice[ProductChoice["SHOW_ALL"] = 3] = "SHOW_ALL";
            ProductChoice[ProductChoice["UPDATE_BY_ID"] = 4] = "UPDATE_BY_ID";
            ProductChoice[ProductChoice["REMOVE_BY_ID"] = 5] = "REMOVE_BY_ID";
        })(ProductChoice || (ProductChoice = {}));
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
                    this.productManagement.removeById(id);
                }
            }
        } while (choice !== 0);
    }
}
exports.ProductMenu = ProductMenu;
