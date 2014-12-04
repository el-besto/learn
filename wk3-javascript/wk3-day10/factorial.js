//factorial 
var fact = function (n){
  if (n < 2){
    return 1;
  } else {
    return n * fact(n-1);
  }
};

//sum

var sum = function(a, b){
  return a + b;
};

module.exports.factorial = fact; 
module.exports.sum = sum;
module.exports.taco = fact;
module.exports.burrito = sum;