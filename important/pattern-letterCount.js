Key pattern we are supposed to learn 


// Write a function that takes a string that finds out how many times a 
//character occurs. For example, the string "apple" would print the following:

// a - 1
// p - 2
// l - 1
// e - 1

// BONUS: Make sure that lower case letters and upper case letters count for the same character. Also, ignore spaces and punctuation.

another name for the problem is a histogram from statistics, a barchart that shows frequency of each letter

you can access char of a string like you access elements of an array.
you cannot set a value of a string, unlike arrays (particular to JS), strings are immutable.

// SOLUTION FROM MIKE 
var letterCount = function (str){
  var obj = {}; // initialized empty object

  for (var i = 0; i < str.length; i += 1){
    var letter = str[i]; // grabs letter at location in string
    
    if(!!(obj[letter])){  // if (letter in obj)  will return true, otherwise typecast, 
                         // if (!!(obj[letter]) typecast to avoid "undefined"; changes undefined to False
      obj[letter] += 1;
    } else {
      obj[letter] = 1;
    }
  }
  return obj;
};
console.log(letterCount('hello world'));

//an object is a collection of key and value pairs
// key = letter, value = count of occurrences
// if you look in an object and the key doesn't exist then it will return undefined, the only way to can get a
// to look inside an object use []; e.g. letterCount["key to look for, written as a string"];
// keys to Arrays are always numbers, the index.
// Objects are Arrays indexed by Keys
// to associate and put a Key/Value pair use assignment operator on key 
  // e.g. letterCount["key"] = "value"


// "h" in letterCount? // check if a particular key is already in an object

var character = "i";

if (character in letterCount){
  letterCount[character] += 1;
} else {
  letterCount[character] = 1;
}