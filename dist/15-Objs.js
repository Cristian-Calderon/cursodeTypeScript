"use strict";
(() => {
    // Any (recibe cualquier tipo de dato)
    // Pero podemos asignarle un typo
    const products = [];
    const addProduct = (data) => {
        products.push(data);
    };
    addProduct({
        title: 'Pro1',
        createAt: new Date(1993, 1, 11),
        stock: 12,
    });
    addProduct({
        title: 'Pro1',
        createAt: new Date(1993, 0, 12),
        stock: 12,
        size: 'medium'
    });
    addProduct({
        title: 'Pro3',
        createAt: new Date(),
        stock: 1,
        size: 'large'
    });
    console.log('Array products: ', products);
})();
