import {createProduct, calcStock, products} from './product.service';

createProduct({
  name: 'Producto1',
  createAt: new Date(),
  stock: 5
})

createProduct({
  name: 'Producto2',
  createAt: new Date(),
  stock: 5
})

console.log(products);
const total = calcStock();
console.log(total);

