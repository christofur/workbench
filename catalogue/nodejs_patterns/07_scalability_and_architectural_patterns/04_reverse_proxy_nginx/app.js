var http = require('http');
var pid = process.pid;

http.createServer(function(req, res) {
  for(var i = 1e7; i > 0; i--) {}
  console.log('Handling request from ' + pid);
  res.end('Hello from ' + pid + '\n');
}).listen(process.env.PORT || process.argv[2] || 8080, function() {
  console.log('Started ' + pid);
});
