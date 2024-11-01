(() => {

  // Solo podemos asignarle un string
  let productTitle: string = 'My amazing product';
  productTitle = 'My amazing product changed';
  console.log('productTitle: ', productTitle);

  const productDescription: string = "I don't now ";
  console.log('productDescription: ', productDescription);

  let productPrice:number = 100;
  let isNew : boolean =false;
  // Back tick's
  const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
  `;
  console.log('summary: ', summary);


})();
