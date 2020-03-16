const { readdirSync, lstatSync } = require("fs");

const fileFinder = (source, filelist = []) => {
  files = readdirSync(source);

  files.forEach((fileDir) => {
    if (lstatSync(source + '/' + fileDir).isDirectory()) {
      filelist = fileFinder(source + '/' + fileDir, filelist);
    }
    else {
      filelist.push(source + '/' + fileDir);
    }
  });

  return filelist;
};

module.exports = fileFinder;
