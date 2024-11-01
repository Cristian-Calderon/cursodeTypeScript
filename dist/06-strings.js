"use strict";
(() => {
    // Solo podemos asignarle un string
    let productTitle = 'My amazing product';
    productTitle = 'My amazing product changed';
    console.log('productTitle: ', productTitle);
    const productDescription = "I don't now ";
    console.log('productDescription: ', productDescription);
    let productPrice = 100;
    let isNew = false;
    // Back tick's
    const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
  `;
    console.log('summary: ', summary);
})();
