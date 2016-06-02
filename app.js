// a very simple server

// var http = require('http');
// var fs = require('fs');

// var moment = require('moment');
// console.log(moment().format('ddd, h:mA'))

// http.createServer(function(request, response){
//
//    if(request.url === '/'){
//       fs.createReadStream(__dirname + '/index.html').pipe(response)
//    }
//    else if(request.url === '/api'){
//
//       response.writeHead(200, {'Content-Type': 'application/json'});
//       var obj = {
//          name: 'Sap',
//          location: 'SF'
//       };
//       response.end(JSON.stringify(obj))
//    }
//    else{
//       response.writeHead(404);
//       response.end();
//    }
// }).listen(1337, '127.0.0.1');

var express = require('express');
var app = express();

var port = process.env.PORT || 1337;

app.set('view engine', 'ejs');

app.get('/', function(request, response){
   response.render('index');
});

app.get('/person/:id', function(request, response){
   response.render('person', {ID: request.params.id});
});

app.get('/api', function(request, response){
   response.json({
      name: 'Sap',
      location: 'SF'
   })
})

app.listen(port);
