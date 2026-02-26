const http = require('node:http');
const pretty = require('pretty-log');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  pretty.info(`Nieuwe request: ${req.method} ${req.url}`);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  pretty.success(`Server gestart op http://${hostname}:${port}/`);
});