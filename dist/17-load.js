"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Load the full build.
// var _ = require('lodash');    || Manera de importar una libreria que no es compatible con typescript
const lodash_1 = __importDefault(require("lodash"));
// Para poder instalar una dependecia que haga como puente entre estas dos nos recomienda usar @types/[libreria].
// npm i --save-dev @types/ lodash
const data = [
    {
        username: 'Gardel',
        role: 'mid'
    },
    {
        username: 'Markeiz',
        role: 'roaming'
    },
    {
        username: 'W33',
        role: 'mid',
    },
    {
        username: 'Miracle',
        role: 'mid',
    }
];
// Existe una funcion para agrupar una propiedad en este caso rol.
// Tambien se puede hacer un reduce().
const rta = lodash_1.default.groupBy(data, (item) => item.role);
console.log(rta);
