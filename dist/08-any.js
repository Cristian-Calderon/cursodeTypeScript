"use strict";
(() => {
    let myDynamicVar;
    // Es desactivar el sistema de analisis de tipos de una variable.
    myDynamicVar = 100;
    myDynamicVar = null;
    myDynamicVar = {};
    myDynamicVar = '';
    myDynamicVar = 'Hola';
    // Dos maneras de hacer un casting
    const rta = myDynamicVar.toLowerCase();
    console.log(rta);
    myDynamicVar = 1212;
    // Otra manera de hacer un casting || .toFixed
    const rta2 = myDynamicVar.toFixed();
    console.log('Que soy? : ', typeof rta2);
    //   other example:
    let valor = "123";
    let logitud = valor.length;
    console.log(logitud);
})();
