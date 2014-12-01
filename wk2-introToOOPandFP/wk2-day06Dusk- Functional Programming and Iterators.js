/************************
2014-11-24 //class 6
https://github.com/sf-wdi-15/notes/tree/master/week_02_intro_to_oop_and_fp/day_1_testing_and_iterators/dusk_iterators
************************/

/************************
  Functional Programming and Iterators

In computer science, functional programming is a programming paradigm, a style of building the structure and elements of computer programs, that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.

Objective
  * Students will be able to describe what is meant by the phrase "First-Class Functions".
  * Students will be able to use higher-order functions to make new functions.
  * Students will be able to use common iterators like Map and Reduce.

************************/


/************************
  What does that mean? Haven't we already been doing that?

First class functions
  A function is called first class if it can be passed as an argument to another function. This feature isn't found is every programming language: there are programming languages that have first-class functions, like Javascript or Ruby, and those that dont't like, C or Java (technically Java kind of has them now, but that's not important).
  
  All that is meant by first-class functions is that we can pass functions as arguments to other functions. Just like any other type of value.
    var run = function(fn) {
      return fn();
    };

run(function() { console.log("Hello, World"); });

************************/


/************************
  Higher order functions
    functions that return other functions.
************************/

  //Function that adds a number k to a number l
    var add = function(k) {
      return function(l) {
        return l + k;
      };
    };

    var add5 = add(5);
    console.log(add5(10));

  //function that returns a function if m > n
    var greaterThan = function(n) {
      return function(m) {
        return m > n;
      };
    };

    var greaterThan10 = greaterThan(10);
    console.log(greaterThan10(11));

  //function that takes a function that returns a function on two parameters
    var calc = function(fn){
      return function(a,b) {
        return fn(a,b);
      };
    };

    var adder = calc(function(x,y) { return x+y; });
    console.log(adder(1,2));

    var multer = calc(function(a,b) { return a*b;});
    console.log(multer(5,2);


/************************
  Higher order functions

forEach - 
  Anytime you are going to do something the elements i.e. pass in a function, use this. Don't really use for loops anymore

  var nums = [1,2,3,4,5];

  nums.forEach(function(element, index, array) {
      console.log(array);
      console.log('nums[' + index + '] = ' + element);
  });

  console.log(nums);

  nums.forEach(function(element, index, array) {
    console.log(array);
    array[index] = element + 5;
    console.log(array);
  });

  console.log(nums);

* key learning, is that you can create a function shell then create new functions on the fly by passing in a parameter to the shell, thus letting you use the newly created function 

************************/
//Exercise: Lets build our own forEach function called each that does the same thing as forEach.
var for_each = function(arr, fn){
  for(var i = 0; i < arr.length; i++){
    fn(arr[i], i, arr); // for clarity we may want to add in the i and arr to maintain forEach's ability to have 3 arguments.
  }
};


/************************
map

  var map = function(nums, fn) {
    var arr = [];
    for_each(nums, function(el,id,ar) {
      arr[id] = fn(el);
    });
    return arr;
  };

  var map_nums = [10,2,3,1,5,2];

  var val = map(map_nums, function(x) { return x + 5; });
  console.log("map nums:", map_nums);
  console.log("val     :", val);

************************/
// Exercise: Build a version of map that is destructive.
  // map returns an array
  // forEach performs the function on the array and returns it each time
var map = function(el, id, ar){
  var arr = [];
  for_each(ar){
    arr[id] = fn = fn(el);
  }
};

var map2 = function(nums, fn){
  var arr = [];
  for (var i = 0; i<nums.length;; i+=1){
    arr[i] = fn(nums[i]);
  }
  return arr;
};

var mapDestructive = function(arr, fn){
  for_each(arr, function(el, id, ar)){
    ar[i] = fn(el);
  }
};

var dmap = function(arr, fn){
  for_each(arr, func(el, id, ar)
    ar[id] = fn(el);
  });
  return arr;
};

/************************
reduce 

Lets build a function reduce that takes in an array, a function that combines elements of the array pairwise, and an optional start value.

  var reduce = function(arr, fn, start) {
    var result = start || arr[0]; //use arr[0] to ensure there is a value to pass into
    for_each(arr.slice(1), function(el,id,ar) {
      result = fn(result,el);
    });
    return result;
  };

  var xs =[1,2,3,4,5];
  var ans = reduce(xs,function(x,y) { return x + y; }, 0);
  console.log('xs:', xs);
  console.log('ans:', ans);

  //WITHOUT START
  var xs =[1,2,3,4,5];
  var ans2 = reduce(xs,function(x,y) { return x + y; });
  console.log('xs:', xs);
  console.log('ans:', ans2);
************************/

/************************
filter 

  Exercise: Build a function filter that has two parameters: an array and a function that returns a boolean value. The function reduce should return an array of values that yielded true under the application of the boolean function provided as a parameter. Essentially the idea is to filter out elements of an array that don't satisfy some condition.

************************/