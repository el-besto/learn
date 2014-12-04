// SOLVING PROBLEMS WITH DIVIDE AND CONQUOR
merge sort algorithm - shows the internals of the sort() function

Prompt:
previously we implemented merge to merge two sorted arrays.
how can we turn this into a sorting algorithm?

var arr1 = [5,8,2,7];
var arr2 = [1,4,10,6];

var sort = function(arr){

  while(arr.length > 1){
    secondHalfArr = arr.splice(arr.length / 2);  
  };
  
};


// try two... just the merge function

var a = [1,4], b = [2,3], merge, sort;


merge = function(arrA, arrB){
  var i, j, arrC = [];
  for (i = arr.length-1; i >; i--){

  }


  while (i < arrA.length || arrB.length){
    if(arrA[i] === arrB[i]){
      arrC[i] = arrA[i];
      i++;
      j++
    } else if (arrA[i] < arrB[j]){
      arrC[i] = arrA[i];
      i++;
    } else { 
      arrC[i] = arrB[j];
      j++;
    }
  }
 
}

sort = function(arrayLength ,b){
  for (var i = arr1.length - 1; i === arr1.length
  a.length-1
}







var start = 0;
var end = arr.length - 1;

for (var i = start + 1; i <= end; i++){
  for(var j = i; j > start && intArray[j-1]; j--){
    var temp = intArray[j-1];
    intArray[j-1] = intArray[j];
    intArray[j] = temp;
  }
}

