// Functions needed => readLine (To read file's line)
// Path => for producing the path joining
// fs => file system finder
// Some javascript thats it!

const todoFinder = require("./todo-finder");
const http = require("http");
const path = require("path");

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
  console.log(todoFinder(directoryPath));
  console.log(`Server running at http://${hostname}:${port}/`);
});
