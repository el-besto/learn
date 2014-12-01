methods to know
  push()
  pop()
  shift()
  unshift()

// function that reverses a string
var str = prompt();

var strReverse = function(word){
  return word.split('').reverse().join('');
};

var newStr = strReverse(str)

console.log(newStr);
console.log(strReverse(str));