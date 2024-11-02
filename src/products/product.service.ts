import {Product} from './product.model';

export const products: Product[] = [];

export const createProduct = (data: Product) => {
  products.push(data)
}

// Creamos otro ejemplo
export const calcStock = (): number => {
  let total = 0;
  products.forEach(item => {
    total = total + item.stock;
  });
  return total;
}
