/************************
2014-12-02 //class 10
  https://github.com/sf-wdi-15/notes/tree/master/week_03_express_sql/day_3_intro_sql/dawn_node_review
************************/
1. review node 
2. file separation e.g. "modules"
homework
  - remember shortcuts = ctrl shift L  for colors, ctrl shift 0 to turn of 

/************************
What is the REPL
  Read
  Evaluate
  Print
  Loop

************************/

//factorial 
var fact = function (n){
  if (n < 2){
    return 1;
  } else {
    return n * fact(n-1);
  }
};

/************************
Exposing functionality
  separating js files into separate entities i.e. objects,  exporting them as methods using module.exports.methodN
  create someFile.js with scripts
    module.exports = functionName;
  create a file 'combinedFile.js' 
    var someName = require('./someFile.js');
************************/

//someFile.js
var someFunction = function (n){
  if (n < 2){
    return 1;
  } else {
    return n * fact(n-1);
  }
};
var anotherFunction = function (n){ return n + 1; };

module.exports.fn1 = someFunction;
module.exports.fn2 = anotherFunction;

//combinedFile.js
var myFunctions = require('./someFile.js');
myFunctions.f1(10); //=> refers to someFunction 

*** REALLY WRITE IT DOWN AGAIN **** and draw it.
// app.get('/', function(err, req, res){
//   if(!err){
//     res.send("hello world");
//   } else {console.log("you have an error");}
// });