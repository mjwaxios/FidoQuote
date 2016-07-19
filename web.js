var qu = require('./quotes');

var http = require('http');
const PORT = 3000;
function handleRequest(req, res) {
  var q = qu.getRandomQuote();
  console.log("Index: " + q.index + " of " + q.length);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(qu.stripQuote(q.quote));
}

var server = http.createServer(handleRequest);
server.listen(PORT, function() {
  console.log("Listening on : %s", PORT);
});






