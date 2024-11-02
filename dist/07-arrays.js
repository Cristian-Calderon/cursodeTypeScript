"use strict";
(() => {
    // Es un tipo de variable de 3 tipos
    let prices = [1, 2, 3, 4, 5, 'hola', true];
    prices.push(1212);
    let products = ["hola", true];
    products.push(false);
    let mixed = ['hola', true];
    mixed.push(12);
    mixed.push('as');
    mixed.push(true);
    mixed.push({});
    mixed.push([]);
    let numbers = [1, 2, 3, 4, 5];
    numbers.map(item => item * 2);
})();
