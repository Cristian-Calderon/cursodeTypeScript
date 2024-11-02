"use strict";
(() => {
    let userId;
    let shirtSize;
    shirtSize = 'S';
    shirtSize = 'M';
    shirtSize = 'L';
    shirtSize = 'XL';
    function greetings(userId, size) {
        if (typeof userId === 'string') {
            console.log(`string ${userId.toUpperCase()}`);
        }
    }
    greetings(1, 'XL');
    greetings('1323', 'XL');
})();
