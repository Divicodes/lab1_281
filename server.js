const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, This is my 281 first lab assignment!');
}

const server = http.createServer(requestListener);
server.listen(8080);
console.log('Connect and running successfully');