"use strict";
(() => {
    // La funcion tiene como parametro un objeto
    const login = (objeto) => {
        console.log(objeto.email, objeto.password);
    };
    // Recibe un objeto
    login({
        email: 'example@some.com',
        password: 123123
    });
    console.log('\n');
    // revisar el any
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
    console.log('Array products: ', products);
})();
