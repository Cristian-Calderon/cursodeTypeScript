"use strict";
(() => {
    function createProductToJson(title, createAt, stock, size) {
        return {
            title,
            createAt,
            stock,
            size
        };
    }
    // Primera funcion
    const product1 = createProductToJson('P1', new Date(), 12, 'XL');
    console.log('Soy el objeto: ', product1);
    console.log('propiedad: ' + product1.title);
    console.log('propiedad: ' + product1.stock);
    console.log('propiedad: ' + product1.size);
    // Segunda funcion
    const createProductToJsonV2 = (title, createAt, stock, 
    // Forma de hacer opcion un atributo
    size) => {
        return {
            title,
            createAt,
            stock,
            size
        };
    };
    console.log("\n");
    // Atributo Size se convierte en opcional pero pasa a ser un undefined
    const product2 = createProductToJsonV2('P2', new Date(), 12);
    console.log('Soy el objeto 2: ', product2);
    console.log('propiedad: ' + product2.title);
    console.log('propiedad: ' + product2.stock);
    console.log('propiedad: ' + product2.size);
})();
