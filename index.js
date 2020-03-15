// Functions needed => readLine (To read file's line)
// Path => for producing the path joining
// fs => file system finder
// Some javascript thats it!

const http = require("http");
const path = require("path");
const fileFinder = require("./helpers/file-finder");
const wordFinder = require("./helpers/word-finder")

const directoryPath = path.join(__dirname, "src");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  fs.readFile("demofile1.html", function(err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end();
  });
});

server.listen(port, hostname, () => {
  const allFiles = fileFinder(directoryPath);
  const filesWithTodo = wordFinder(allFiles, 'TODO')
  filesWithTodo.forEach(data => {
    console.log(data)
  })
});
