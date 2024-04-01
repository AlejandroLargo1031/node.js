const fs = require("node:fs/promises"); // apartir de node 16: se recomienda poner node:

console.log("leyendo el primer archivo....");
fs.readFile("./archivo.txt", "utf-8")
  .then(text => { //promesas
  console.log("primer texto ", text);
});

console.log("---> hacer otras cosas mientras se lee el archivo ....");

console.log("leyendo el segundo archivo...");
fs.readFile("./archivo2.txt", "utf-8") 
  .then(text => {
  console.log("segundo texto ", text);
});
