const { readdirSync, lstatSync } = require("fs");
const path = require("path");

function todoFinder(source) {
  const directoryPathList = source =>
    readdirSync(source).map(name => {
      const pathDirectory = path.join(source, name);

      console.log(
        `is ${pathDirectory} a directory? => ${lstatSync(
          pathDirectory
        ).isDirectory()}`
      );
      if (lstatSync(pathDirectory).isDirectory()) {
        directoryPathList(pathDirectory);
      }

      return pathDirectory;
    });

  return directoryPathList(source);
}

module.exports = todoFinder;
