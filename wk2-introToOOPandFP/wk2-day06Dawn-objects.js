/************************
2014-11-24 //class 6
  https://github.com/sf-wdi-15/notes/tree/master/week_02_intro_to_oop_and_fp/day_1_testing_and_iterators/dawn_testing
************************/

/************************
Outline
  Objects
    Review: key vals
      exercises
    keys as properties
    dot syntax

  Methods
    functions as values
    examples/exercises
    context

Note: console.dir //prints out way more details about the object you are logging

*************************/
create a new key and change key with same syntax 
friend['firstName'] = "angelo";
friend['age'] = '21';

/************************
  Keys As Properties

You can access different properties of an object using one of two syntaxes you might have seen already.
  var friend = { 
                  firstName: "Jane", 
                  lastName: "Doe" 
              };

  // firstName is property
  console.log(friend['firstName']);

The above is an example of the square brackets notation and it's the more general way to access keys of an object. There is also a dot syntax for convenience.
  var friend = { 
                  firstName: "Jane", 
                  lastName: "Doe" 
              };

  // firstName is property
  console.log(friend.firstName);

  The notation you choose to use is up to you, and depends on the amount of generality you need for solving a particular problem.
*************************/

/************************
  Methods

Objects are currently taken to mean a collection of key value pairs, which might be simplified to just say a collection of data. The following example falls into this simplification quite nicely, a friend with a first and last name, data.

*************************/

/************************
  context 

All the methods we made in our last example were doing some really fun things, but they aren't really interacting with the data in an object. We could make a method that did using an example like the following:

  var person = {
      firstName: "Jane",
      lastName: "Doe"
  };

  person.fullName = function () {
      // we access the first and last name of person
      person.lastName + ", " person.firstName;
  };

  console.log(person.fullName());

This example prints the persons full name to the console. How is it able to do this?
  Javascript gives each function a context which references the object it belongs to. The keyword for accessing the context is called this, and we can use it to refactor our person.fullName from above.

  person.fullName = function () {
    // we access the first and last name of person using the keyword this
    this.lastName + ", " this.firstName;
  };

  console.log(person.fullName());

  Exercises
    1. Make a pet with some name, and a method speak that returns "hello I am SOME_NAME" using the this keyword to access the name of the pet.
    */
    var pet = {
      name: "Lucky", 
      speak: function(){
        console.log("hello I am " + this.name);
      };
    };

    pet.speak();
    
    /*
    2. Give your pet a property called dirty that is true. Give your pet a method called wash that sets dirty to false using this.
    */
    var pet = {
      name: "Lucky", 
      speak: function(){
        console.log("hello I am " + this.name);
      }, 
      dirty: true,
      wash: function(){this.dirty = false}
    };
    
    pet.speak();
    console.log(pet.dirty);
    
    pet.wash();
    console.log(pet.dirty);
    
    /*
    3. Give your pet a property called hungry that is true. Give your pet a method called feed that sets hungry to false using this.
    */
    var pet = {
      name: "Lucky", 
      speak: function(){
        console.log("hello I am " + this.name);
      }, 
      dirty: true,
      wash: function(){this.dirty = false},
      feed: function(){this.hungry = false;}
    };

    pet.speak();//pet says his name
    
    console.log("pet is dirty?", pet.dirty);
    pet.wash(); //wash the pet
    console.log("I just washed the pet");
    console.log("is pet still dirty?", pet.dirty);

    pet.hungry = true;//pet is hungry
    console.log("is the pet hungry?", pet.hungry);
    pet.feed; //feed the pet
    console.log("I just fed the pet");
    console.log("is pet still hungry?", pet.hungry);

    // its better to acutally declare the functions outside of the object and then set the key/value pairing directly.
    flesh out and test example below.
    e.g.
    var pet = {
      name: "Lucky",
      dirty: true,
      awake: true
    };
    var speak = function(){
      console.log("hello I am " + this.name);
    };
    pet.speak = speak;

    var wash = function(){
      this.dirty = false;
    };
    pet.wash = wash;

    var feed = function(){
      this.hungry = false;
    };
    pet.feed = feed;

    var rest = function()}{
      this.awake = false;
    }
    pet.rest = rest;
    console.log('');


    /*
    4. Give your pet a property called awake that is true, and a method called rest that sets awake to false.
    */
    do exercise

    /*
    5. Give your pet a method wake that sets awake to true.
    */

*************************/