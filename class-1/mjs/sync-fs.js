const fs = require("node:fs"); // apartir de node 16: se recomienda poner node:

console.log('leyendo el primer archivo....')
const text = fs.readFileSync("./archivo.txt",  "utf-8");

console.log(text);

console.log('leyendo el segundo archivo...')
const text2 = fs.readFileSync("./archivo2.txt",  "utf-8");

console.log(text2);


