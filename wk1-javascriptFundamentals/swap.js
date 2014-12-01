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

//console.log(swap(myArr, 0, 3)); // demo swap function

//solution with function swap
var reverse = function(arr){
  for(i = 0; i <= arr.length/2; i++){
    swap(arr, i, arr.length - 1 - i);
  }
  return arr;
}

console.log(reverse(myArr));

//
// Notes: This is modular code. Each function is testable,  and helps make what you are trying to do easier to understand.