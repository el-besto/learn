/************************
2014-11-24 //class 6

Problem Solving Factorial 
Implement factorial: USE RECURSION

what is the terminal condition?

what is the recursive condition?

-hint: write factorial(4) in terms of factorial 3

  factorial(1) = 1
  factorial(4) = 4 * (3 * 2 * 1)
  factorial(3) = 3 * 2 * 1
  factorial(4) = 4 * (factorial(3))
  factorial(n) = n * factorial(n-1)

*************************/

var factorial = function(num){
  var answer;
  if(num > 0){
    answer = factorial(num - 1) * num;
  } else {
    answer = 1;
  }
  return answer;
};