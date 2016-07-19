var qu = require('./quotes');

var http = require('http');
const PORT = 3000;
function handleRequest(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(qu.stripQuote(qu.getRandomQuote()));
}

var server = http.createServer(handleRequest);
server.listen(PORT, function() {
  console.log("Listening on : %s", PORT);
});






