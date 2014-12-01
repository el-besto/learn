//example of function nesting and encapsulation

var myOuter = function(x){
  return function(y){
    return x + y;
  }
}

myOuter(1)(2)

var addOne = myOuter(1)

addOne(5)

// allows us to make a bunch of functions that do a similar thing very easily.

var myOuterFunc = funciton(x){

  var myInnerFunc = function(y){
    return y;
  };

  return myInnerFunc;
};

var first = myOuterFunc();