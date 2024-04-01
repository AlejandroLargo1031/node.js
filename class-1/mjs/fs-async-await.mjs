import { readFile } from "node:fs/promises"; // apartir de node 16: se recomienda poner node:

console.log("leyendo el primer archivo....");
const text = await readFile("./archivo.txt", "utf-8");
console.log("primer texto ", text);

console.log("---> hacer otras cosas mientras se lee el archivo ....");

console.log("leyendo el segundo archivo...");
const secondText = await readFile("./archivo2.txt", "utf-8");
console.log("segundo texto ", secondText);
