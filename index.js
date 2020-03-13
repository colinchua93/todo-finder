const http = require("http");
const fs = require("fs");
const path = require("path");

const hostname = "127.0.0.1";
const port = 3000;

const directoryPath = path.join(__dirname, 'src')

const directoryPathList = () => {
  return fs.readdirSync(directoryPath)
}

const server = http.createServer((req, res) => {
  fs.readFile("demofile1.html", function(err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end();
  });
});

server.listen(port, hostname, () => {
  console.log(directoryPathList())
  console.log(`Server running at http://${hostname}:${port}/`);
});
