const fs = require("node:fs/promises");
const  path = require("node:path");
const pc = require('picocolors');

const folder = process.argv[2] ?? ".";

async function ls(folder) {
  let files;
  try {
    files = await fs.readdir(folder);
  } catch {
    console.error(pc.red(`no se pudo leer e directorio ${folder}`));
    process.exit(1);
  }

  const filesPromises = files.map(async file => {
    const filePath = path.join(folder, file);
    let stats

    try {
      stats = await fs.stat(filePath); // status - informacion del archivo
    } catch {
      console.error(`no se pudo leer el archivo: ${filePath}`);
      process.exit(1);
    }

    const isDirectory = stats.isDirectory();
    const fileType = isDirectory ? 'd' : 'f'
    const fileSize = stats.size
    const fileModifield = stats.mtime.toLocaleString()

    return `${pc.white(fileType)} ${pc.blue(file.padEnd(20))} ${pc.green(fileSize.toString().padStart(10))} ${pc.yellow(fileModifield)}`
  });

  const filesInfo = await Promise.all(filesPromises);

  filesInfo.forEach(fileInfo => console.log(fileInfo));
}

ls(folder);