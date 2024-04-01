import { readFile } from "node:fs/promises"; // apartir de node 16: se recomienda poner node:

Promise.all([
  readFile('archivo.txt', 'utf8'),
  readFile('archivo2.txt', 'utf8')
]).then(([text, seconText]) => {
  console.log('primer texto: ', text)
  console.log('segundo texto: ', seconText)
})
