const fs = require('fs');
const path = require('path');
const process = require('process');

const directoryPath = path.join(__dirname, 'secret-folder');

async function task03() {
  fs.readdir(directoryPath, (err, data) => {
    if (err) {
      return err;
    }
    console.log(data);
    data.forEach((file) => {
      let filePath = path.join(directoryPath, file);
      console.log(filePath);
      fs.stat(filePath, (err, stats) => {
        if (stats.isFile()) {
          console.log(path.parse(filePath).name + ' - ' + path.extname(filePath).slice(1) + ' - ' + stats.size / 1000 + 'kb');
        }
      });
    });
  });
}

task03();
