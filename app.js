// a very simple server

var http = require('http');
var fs = require('fs');

http.createServer(function(request, response){

   response.writeHead(200, {'Content-Type': 'application/json'});
   var obj = {
      name: 'Sap',
      location: 'SF'
   };
   response.end(JSON.stringify(obj))
}).listen(1337, '127.0.0.1');


// streams and performance
