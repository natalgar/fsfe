const http = require('http');

http.createServer(function (req, res) {
  res.write('Exercise Bagpipes for everyone!');
  res.end();
}).listen(3000);

console.log('Server started on port 3000');
