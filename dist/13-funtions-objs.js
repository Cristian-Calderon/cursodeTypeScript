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
})();
