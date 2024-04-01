const path = require('node:path');

// barra separada de carpetas segun SO
console.log(path.sep)

// unir rutas con path.jhoin
const filePath = path.join('content','fileText','test.txt')
console.log(filePath);

const base = path.basename('/temp/alejandro-secret/pasword.txt')
console.log(base);

const filename = path.basename('/temp/alejandro-secret/password.txt', '.txt')
console.log(filename);

const extencion = path.extname('imagen.png')
console.log(extencion);