/* La libreria date-fns instalada tiene funciones extras para fechas
   https://date-fns.org/ **/

import {subDays, format} from 'date-fns';

const date = new Date(1993, 1, 10); // 0 = enero, 1 = febrero
// subDays para restar dias.
const rta = subDays(date, 30);

const str = format(rta, 'yyyy/MM/dd');

console.log(str);
