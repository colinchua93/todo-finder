// Functions needed => readLine (To read file's line)
// Path => for producing the path joining
// fs => file system finder
// Some javascript thats it!

const http = require("http");
const path = require("path");
const fileFinder = require("./helpers/file-finder");
const wordFinder = require("./helpers/word-finder");

const directoryPath = path.join(__dirname, "src");

const hostname = "127.0.0.1";
const port = 3000;

const todoFinder = () => {
  const allFiles = fileFinder(directoryPath);
  const filesWithTodo = wordFinder(allFiles, 'TODO')

  return filesWithTodo.join("\n")
}

const server = http.createServer((req, res) => {
  req.on('error', err => {
    console.log(err)

    res.statusCode = 400
    res.end('400: Bad request')
    return;
  })

  res.on('error', err => {
    console.log(err)
  })

  res.write(todoFinder())
  res.end();
});

server.listen(port, hostname, () => {
  // const allFiles = fileFinder(directoryPath);
  // const filesWithTodo = wordFinder(allFiles, 'TODO')
  console.log(`Server running at http://${hostname}:${port}/`);

  // filesWithTodo.forEach(data => {
  //   console.log(data)
  // })
});
