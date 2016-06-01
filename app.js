// a very simple server

var http = require('http');
var fs = require('fs');

http.createServer(function(request, response){

   response.writeHead(200, {'Content-Type': 'text/html'});
   var html = fs.readFileSync(__dirname + '/index.html')
   response.end(html);

}).listen(1337, '127.0.0.1');


// streams and performance 
