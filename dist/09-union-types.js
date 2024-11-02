"use strict";
(() => {
    let userId;
    userId = 122;
    userId = 'texto';
    function greetings(myText) {
        if (typeof myText === 'string') {
            console.log(`string ${myText.toUpperCase()}`);
        }
        else {
            console.log(`number ${myText.toFixed(1)}`);
        }
    }
    greetings('hola mundooooo');
    greetings(12.121212);
})();
