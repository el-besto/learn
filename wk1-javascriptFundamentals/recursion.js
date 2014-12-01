//example of countdown function with recursion

var finalCountDown = function(num){
  if (num > 0){
    console.log(num);
    finalCountDown(num -= 1);
  } else {
    console.log("Finished");
  }
}

// "Spiral"
var spiralDown = function(num) {
  if (num > 1){
    console.log('Spiraling down');
    spiralDown(num - 1);
    console.log('Spiraling up');
  }
};

spiralDown(3);

