const { readdirSync, lstatSync } = require("fs");
const path = require("path");

function todoFinder(source) {
  const directoryPathList = source =>
    readdirSync(source)
      .map(name => path.join(source, name))
      .filter(source => lstatSync(source).isDirectory());

  return directoryPathList(source);
}

module.exports = todoFinder;
