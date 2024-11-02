"use strict";
(() => {
    // Suma de numeros || Funciona que devuelve algo en este caso un string
    const calcTotal = (prices) => {
        let total = 0;
        prices.forEach((item) => {
            total = total + item;
        });
        return total.toString();
    };
    //   Funcion void que no devuelve
    const printTotal = (prices) => {
        const rta = calcTotal(prices);
        console.log(`El total es ${rta}`);
    };
    printTotal([1, 2, 3, 4, 5,]);
})();
