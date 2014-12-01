/************************
2014-11-25 //class 7
  https://github.com/sf-wdi-15/notes/tree/master/week_02_intro_to_oop_and_fp/day_2_prototypes_and_inheritance/dawn_object_prototypes
************************/
assert.deepEqual(actual, expected, "[message]");
deep equal is used to compare values 'inside' an array

/************************
Outline

* Testing
* Constructors
  creating custom functions
* Prototypes - Diagrams are key, esp for debugging, $$$ this is where you get paid  
* Prototypical Inheritance - (most challenging), $$$ this is where you get paid
  will be taught classical inheritance; however there are other patters

************************/


/************************
Testing
 
  Unfortunately, using just assertions isn't a very organized way of testing and describing behavior. To deal with this we are going to use a set of tools that help us organize our assertions and print better errors when they fail.


 describe("some string", function) // string helps describe what function is doing)
    describe is a pre-defined function from mocha
it("should do")

// not complete, with chai it will look better (assertion library)
// will be using EXPECT library of Chai, instead of Assert library

bdd - behavior focused - behaves the way we want, returns what we expect, does not care about implementation
tdd - implementation focused - is a bit more specific, it goes down to the very bottom level, inside the function 


************************/
var assert = require("assert");

var indexOf = function(arr, value) {
  return arr.indexOf(value);
};

var testArr = [5,6,7];
// assert.equal(-1, indexOf(testArr, 8), "indexOf() should return -1 if value not in array.");
describe('Array', function(){
  it('indexOf() should return -1 when the value is not present', function(){
      assert.equal(-1, indexOf(testArr, 8);
    );
  it("should return the index of something in the array", function(){
    assert.equal(2, indexOf(testArr, 7))
  });
});
describe('first()', function(){
  it("should return the first element in an array", function(){
    assert.equal()
  })
})

REVIEW NOTES AND DO SOME EXAMPLES WITH MOCHA AND CHAI


/************************
JavaScript Constructors

  By the end of this lecture, students will understand constructors in a javascript. A way of create objects that share the same methods and attributes

There is a lot of different ways to create objects.

************************/
//object literal notation
var person = {};

//constructor notation
var person = new Object();

// Array is the constructor
var myArr = new Array();

// The above is equivalent 
//  to using an array literal
var myArr = [];

/************************
Creating Custom Objects

  In trying to model the world around us it becomes useful to create functions that generate objects for us quickly. In general a constructor creates new objects using some given properties.
  Note: A constructor has a few key differences.

Constructors - function SomeConstructor () {}
    
  It uses function declaration (named function, e.g. function Constructor(){};) 
  It uses capitalized CamelCase.
    
************************/

//PATTERN: FACTORY CONSTRUCTOR - long-hand, without (new, and this keywords)
  function Person (first, last) {
    // create new object
    var newPerson = {};

    // set firstName and lastName
    newPerson.firstName = first;
    newPerson.lastName = last;

    // return newPerson
    return newPerson;
  };

  //We can use our constructor to quickly create new people.
  var angelo = Person("Courtney", "HotPants");

//PATTERN: FACTORY CONSTRUCTOR - shorthand-hand, with ('new' and 'this' keywords)
  function Person (first, last) { // constructor is like oo's Class
    // set firstName and lastName
    this.firstName = first; // called instance attributes
    this.lastName = last;

    return this; // do not need, the "new" keyword implies
  };
  var bunny = new Person("easter", "bunny");


  function Pet (name, age){
    this.name = name;
    this.age = age;
  };

  var dog = new Pet('lucky', '17');

  function SuperHero (name, alterEgo){
    this.name = name;
    this.alterEgo = alterEgo;
  }
  var superMan = new SuperHero("super man", "clark kent");


/************************
Prototypes
  Why use Prototypes instead of Constructors?

    You could put functions inside of Constructors, but each time you create a 'new' Object, you are creating a new function 
    * This wastes memory, so instead use prototypes 
    * We want to create as few objects as possible to reduce code replication and memory use (i.e. make code more 'efficient')

    Luckily we have an efficient way of creating methods that doesn't require us to waste memory re-creating functions for every new object. PROTOTYPES.
  
  Now we re-factor our Person to use a Prototype and we will explain more about it in a moment.

  separation of concerns
    Constructor = defining properties (attributes)
    Prototypes  = methods

************************/
  
  function Person(first, last){
    this.firstName = first;
    this.lastName = last;
  }

  Person.prototype.greet = function () {
    return "Hello, my name is " + this.firstName;
  };

/************************
  the Prototype Chain - inheritance 
    Behind the scenes javascript has moved the greet method onto a shared property called the prototype. Now the greet function isn't created with every new person.
  
  hasOwnProperty
    We can check if a method or property belongs to an object or on a prototype by using hasOwnProperty
    - more powerful than 'key' in 'Object', which doesn't distinguish between if the property is in the Object or Prototype

  Review:
    Why do we use the prototype?
      It is an efficient way of creating methods on an object.
    What is a hasOwnProperty?
      It is property that belongs directly on object not in it's prototype.
    What is a prototype property/method?
      Any property that is in the object, but not a hasOwnProperty.
    How do we create a new Person?
      the same way we create a person using just constructors from earlier.
************************/
//Exercises Using Prototype
    function SuperHero(name, alterEgo){
      this.name = name;
      this.alterEgo = alterEgo;
    };

    SuperHero.prototype.superPunch = function(){
      return "WHAAAAM!";
    };

    var batman = new SuperHero('batman', 'bruce wayne');
    batman.superPunch;

    // example 
    function Robot (name, purpose){
      this.name = name;
      this.purpose = purpose;
    };

    Robot.prototype.greet = function(){
      return "beep boop";
    };
    var rosie = new Robot("rosie", "house maid");

    rosie.greet();


/************************
Object Oriented Programming
  
  We haven't really created very advanced methods to interact with our objects. Our methods mostly return strings. In reality there are two main types of methods on an object.

************************/


/************************
Getters: A getter method returns some information about associated with our object
  
  Object.prototype.getProperty = function(){return this.property} 

************************/
  function Person (first, last) {
    this.firstName = first;
    this.lastName = last;
  }

  // A Getter for the firstName
  Person.prototype.getFirstName = function () {
    return this.firstName;
  };

  // A Getter for the lastName
  Person.prototype.getLastName = function () {
    return this.lastName;
  };

  // A Getter for the fullName
  Person.prototype.fullName = function () {
    return this.lastName + ", " + this.firstName;
  };


/************************
Setters: A setter method changes one or more properties associated with an object.

Object.prototype.setProperty = function(newPropertyValue){this.property = newPropertyValue};

************************/
  function Person (first, last) {
    this.firstName = first;
    this.lastName = last;
  }

  // A setter for the firstName
  Person.prototype.setFirstName = function (newFirst) {
    this.firstName = newFirst;
  };

  // A setter for the lastName
  Person.prototype.setLastName = function (newLast) {
    this.lastName = newLast;
  };

  // A setter for the fullName
  Person.prototype.fullName = function (newFirst, newLast) {
    this.firstName = newFirst;
    this.lastName = newLast;
  };