// Common.js require module
// const { sum } = require('./sum')

// console.log(sum(1, 2))

import { os } from 'node:os';

console.log('informacion del sistema operativo')
console.log('_______________________')

console.log('Nombre del Sistema Operativo', platform())
console.log('Versión del Sistema operativo', release())
console.log('Arquitectura', arch())
console.log('CPU', cpus())
console.log('Uptime', uptime() /60 /60)