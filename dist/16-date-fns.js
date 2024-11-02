"use strict";
/* La libreria date-fns instalada tiene funciones extras para fechas
   https://date-fns.org/ **/
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
const date = new Date(1993, 1, 10); // 0 = enero, 1 = febrero
// subDays para restar dias.
const rta = (0, date_fns_1.subDays)(date, 30);
const str = (0, date_fns_1.format)(rta, 'yyyy/MM/dd');
console.log(str);
