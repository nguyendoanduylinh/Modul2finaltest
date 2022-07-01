import { Product } from "./Product";
import { ProductMenu } from "./product-menu";
import { ProductManagement } from "./product-management";

let productMenu = new ProductMenu();
let productManagement = new ProductManagement();

let product1 = new Product(
  "bread",
  "food",
  15,
  30,
  "01/07/2022",
  "instant food"
);
let product2 = new Product(
  "dumpling",
  "food",
  24,
  40,
  "01/07/2022",
  "instant food"
);
let product3 = new Product(
  "glasses",
  "accessories",
  30,
  60,
  "01/07/2022",
  "wear on face"
);
let product4 = new Product(
  "Note9",
  "phone",
  60,
  120,
  "01/07/2022",
  "surf Facebook"
);
let product5 = new Product(
  "Nike",
  "shoes",
  40,
  80,
  "01/07/2022",
  "wear on foot"
);

productManagement.createNew(product1);
productManagement.createNew(product2);
productManagement.createNew(product3);
productManagement.createNew(product4);
productManagement.createNew(product5);

productMenu.run();
