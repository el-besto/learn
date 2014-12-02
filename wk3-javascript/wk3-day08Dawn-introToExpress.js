/************************
2014-12-01 //class 8
  https://github.com/sf-wdi-15/notes/tree/master/week_03_express_sql/day_1_intro_express/dawn_express
************************/

Intro to Express

/************************
outline
- What is the net 
- HTTP 
- Web Framework 
  * What is a server 
  * what is a framework 
  * routing 

Objectives 
- examine http requests 
- discuss browser vs Internet(s)
- build a simple server app 

************************/


/************************
HTTP - a standard you are supposed to follow, not required. 

URL BREAKDOWN
  http://www.google.com/search?q=taco    
  http         www.google.com   /search?        q=taco    
  protocol     domain name      route or path   query params 


REQUEST TYPES
  request type          description 
    GET                   return some info to me (no changes are made)
    POST or put           create on a server
    PUT or Patch          update info
    DELETE or destroy     destroys info
    
REQUEST CODES
  200s - OK
  300s - something has moved
  400s - something cannot be found
    403 - forbidden
    404 - not found
  500s - server error

  resource: https://www.flickr.com/photos/girliemac/sets/72157628409467125/detail/
************************/


/************************
Example web server with Node
  The below is to demonstrate how Node can be used to create network applications. You can specify exactly how the behavior is.
************************/

//simple server
  var http = require("http");

  function doStuff(req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("Hello World");
    res.end();
  }

  var server = http.createServer(doStuff);

  server.listen(3000);


//simple server with Express
  var express = require ('express');
  var app = express();

  app.get("/", function(req, res){
          res.send("Hello World");
  });

  app.get("/blah", function(req, res){
          res.send("Blah blah blah");
  });

  app.listen(3000);

//Installing nodemon
npm install -g nodemon

// If we just ran node nameOfFile.js, node will not update its responses after the server has made.

index.js

//The following example, shows a few different ways to get routes working in Node. A route is a combination of a url pattern + HTTP Verb (get, post, delete, update)

var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('hello delmer');
});

app.get("/greet/:name/:lastname", function(req, res) {
  res.send("Hello " + req.params.name + " " + req.params.lastname)
})

app.get("/multiply/:x/:y", function(req, res) {
  res.send("The answer is: " + (req.params.x * req.params.y));
})

app.get("/add/:x/:y", function(req, res) {
  res.send("The answer is: " + (parseInt(req.params.x) + parseInt(req.params.y)));
})

app.listen(3000);

// In addition to having routes where diffrent portions of the url are diffrent paramaters. We can use the generic string of the url in our route logic.

app.get("/add/*", function(req, res) {
  var myParams = req.params[0].split("/")
  var result = myParams.reduce( function(total, num){ return total + parseInt(num) }, 0)
  res.send("The answer is  " + result);
})
// This will give you a url like http://localhost:3000/add/5/3/3/2/3 and give you an answer.


var express = require("express");
var app = express();

app.get("/blah", function(req, res){
  console.log(req);

  if (req.query.name){
    res.send("Hello " + req.query.name);
  } else {
    res.send("Hello World");
  }
});

/************************
Using Query Param 
  after ? it is called a query peram; but wont use much.
  routing params will be used
************************/

var express = require("express");
var app = express();

//wont use QUERY PARAMS
// if we sent in localhost/blah?name=Angelo
  app.get("/blah", function(req, res){
    console.log(req);

    if (req.query.name){
      res.send("Hello " + req.query.name);
    } else {
      res.send("Hello World");
    }
  });

//we will use ROUTING PARAMS, add ? after :param if its optional
  app.get(/hello/:name"", function(req, res){
    res.send("Hello " + req.params.name);
  });

  app.get("/hello", function(res, req){
    res.send("Hello World");
  })

  app.listen(3000);