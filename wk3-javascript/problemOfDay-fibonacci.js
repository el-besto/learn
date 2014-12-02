// Fibonacci Sequence - problems with recursion, run-time vs memory usage, memoization

// Pascals triangle, each row shows you the choices available to you as a "logic tree"

// 1 1 2 3 5 8 13 21
// each number in sequence is the sum of the previous two numbers 
// except the first two numbers


var fib = function(n){
  if (n <= 2){
    return 1;
  } else { 
    return  fib(n-1) + fib(n-2);
  }
};

// this recursive solution causes a lot of duplicated computations 
// consider the exponential growth of computations with large nums 

// Solution: memoization, which is akin to going through a single branch of a "tree" and storing the values in an object (key value pairs) so that the second branch doesn't have to compute

