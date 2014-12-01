// Write a program that prints the integers from 1 to 100.
// But for multiples of three print "Fizz" instead of the number, and for the multiples of five print "Buzz". 
// For numbers which are multiples of both three and five print "FizzBuzz". 
var arr = [];

var initArr = function(arr){
  for (var num = 1; num <= 100; num++){
    arr.push(num);
  }
  return arr;
};

var fizzBuzz = function(arr){
  for (var i = 0; i < arr.length; i++){
    if (arr[i] % 3 === 0){arr[i] = "Fizz";} 
    else if (arr[i] % 5 === 0){arr[i] = "Buzz";} 
    else {arr[i] = arr[i];}
  }
  return arr;
};

console.log(fizzBuzz(initArr(arr)));