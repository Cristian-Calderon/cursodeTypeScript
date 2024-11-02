"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_service_1 = require("./product.service");
(0, product_service_1.createProduct)({
    name: 'Producto1',
    createAt: new Date(),
    stock: 5
});
(0, product_service_1.createProduct)({
    name: 'Producto2',
    createAt: new Date(),
    stock: 5
});
console.log(product_service_1.products);
const total = (0, product_service_1.calcStock)();
console.log(total);
