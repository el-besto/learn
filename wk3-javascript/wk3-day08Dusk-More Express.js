/************************
2014-12-01 //class 8
  https://github.com/sf-wdi-15/notes/tree/master/week_03_express_sql/day_1_intro_express/dusk_more_express
************************/
More Express
/************************
Objectives: using our first framework (express)
- learn middleware, discuss and use in application 
- templating responses to users 
- handling forms 

  middleware: somehting that helps you get your application published, but isnt within the scope of the software projects build cycle 

************************/
key modules:
  nodemon = automatic server refresh 
  ejs = embedded javascript


/************************
Views and Post Data

Baseline app.js
************************/
var express = require('express'),
  app = express();

app.get('/', function(req, res){
  res.send('Hello world!');
});

/************************
VIEWS
  Firstly, we cannot keep using res.send to send a response. It would be much more efficient to store them in files. Let's make a folder, /views, and create an index.html page inside.

Baseline app.js
and let's modify the app.js to use this file via app#render.
************************/

var express = require('express'),
  app = express();

app.get('/', function(req, res){
  app#render()// use a render
  res.render('index.html');
});

*** homework - add noes about views 



NODE MODULE ejs 
/************************
FORMS

************************/  
express cannot read form data by itself, so you need middleware
need a library to parse the request data 
NODE MODULE: --save body-parser