// Problem of day 
// Write a function that takes an array and two indecies, 
// and SWAPS the two VALUES in the array at those indecies, 
// e.g. swap([5,8,9], 0,2)
  //=> 985

  //!!!shows you a trick to swap values

var myArr = [4, 2, 3, 1];

var swap = function (arr, i, j){
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}
console.log(swap(myArr, 0, 3));

 
***********
// solution with two variables
// var myArr = [4, 2, 3, 1];
// var swap = function (arr, i, j){
//   var temp = arr[i];
//   var temp2 = arr[j];
//   arr[i] = temp2;
//   arr[j] = temp;
//   return arr;
// }

//console.log(swap(myArr, 0, 2));



//solution with one variable

var myArr = [4, 2, 3, 1];

var swap = function (arr, i, j){
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}
console.log(swap(myArr, 0, 3));



Lesson Reflection
*** Tell me three things you learned from the lesson 
1. I learned to be careful about lengths of arrays, and remember that you must also -i when you are going back through to the middle (from the swap example).

2. Working out the problem in a small group, BEFORE CODING ANYTHING, and using real values while doing so, is very helpful and allows us to problem-solve together.

3. Modularity in code makes it easier to understand. Two independent functions are better than a single monolithic function. Plus, breaking them apart allows us to test them individually to catch errors. However, you cannot try to write code modularly from the outset; write first, refactor later...


*** Tell me two things you want to research later *
How to use Objects more in Js, to allow me to wrap my head around how powerful Js can be.

How to write functions that pass into other functions (i.e. how to write more modular code or refactor code to be modular)

*** Tell me what youd like to know more about
More key patters: 
1. starting with the prototype with simple words instead of variables describing what they are actually for/what they do. 
2. "template" of pattern with placeholder variables that are meaningful but concise. 