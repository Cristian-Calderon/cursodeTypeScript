"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcStock = exports.createProduct = exports.products = void 0;
exports.products = [];
const createProduct = (data) => {
    exports.products.push(data);
};
exports.createProduct = createProduct;
// Creamos otro ejemplo
const calcStock = () => {
    let total = 0;
    exports.products.forEach(item => {
        total = total + item.stock;
    });
    return total;
};
exports.calcStock = calcStock;
