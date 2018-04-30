console.log("Child Process " + process.argv[2] + " executed." );
// console.log(process);
const http = require('http');

const hostname = '127.0.0.1';
const port = Math.floor(Math.random()*1000);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});