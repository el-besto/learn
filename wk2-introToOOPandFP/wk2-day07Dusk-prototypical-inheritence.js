/************************
2014-11-25 //class 7
  https://github.com/sf-wdi-15/notes/tree/master/week_02_intro_to_oop_and_fp/day_2_prototypes_and_inheritance/dusk_prototypical_inheritance
************************/
Prototypical Inheritance

/************************
Objectives
  * Apply constructors and prototypes together to implement inheritance between objects in Javascript
  
  * To examine lookup in the prototype chain and articulate certain advantages via diagrams

Related Topics
  * Prototypal Inheritance
  * Javascript Prototypes
  * Special Functions:
    - Apply
    - Call
************************/


/************************
Overall Goal
- reduce code complexity
- Ecourage code resuming
- Model the world around us
************************/


/************************
A Prototype in JS Review
************************/
  function Person(name){
      this.name = name
  }

  Person.prototype.greet = function(){
      return "Hello, my name is " + this.name;
  };

/************************
Static Method/Property Review
************************/
*** REVIEW AGAIN ***

   function Person(name){
        this.name = name
        Person.all.push(name);
    }

    Person.all = [];
    Person.count = function(){
        return Person.all.length;
    };

    Person.prototype.greet = function(){
        return "Hello, my name is " + this.name;
    };

/************************
PATTERN: Inheriting Via Prototypes -- Classical Pattern
************************/
*** REVIEW AGAIN ***
*** re-draw diagram ***
*** FIND UML DIAGRAMING ***

//Given the following prototype let's create a student.
    function Person(name){
        this.name = name
    }

    Person.prototype.greet = function(){
        return "Hello, my name is " + this.name;
    };

    function Student(name, course){
        this.name = name;
        this.course = course;
    };

    Student.prototype = new Person();
    Student.prototype.constructor = Student;

//Play with the above example. Create a new Student.

//hack the system to make a "copy" of the Prototype 
Student.prototype = new Person();
//makes a copy of the Person Prototype 

/************************
  What's inherited?
    the greet method

  Why set the Student.prototype.constructor?
    when we say Student.prototype = new Person(); it breaks the constructor property.
************************/



*** LEARN AGAIN ***
/************************
Pitfalls -- Side Effects
  When we inherit in JS we have to watch out for in the wild.
************************/
    function Person(name){
        this.name = name;
        this.friends = [];
    }

    Person.prototype.addFriend = function(name){
        this.friends.push(new Person(name));
    };

    function Student(name){
        this.name = name;
    };

    Student.prototype = new Person()
    Student.prototype.constructor = Student;

//Create two students and add different friends to each. 
//What happens after adding a friend?
    code 
/************************
One quick solution or best practice to avoid problems like these is to always avoid initializing properties with array and object values in the constructor if possible. The alternative is to just add check to each method to check if the value is defined.
************************/


*** LEARN AGAIN ***
/************************
'call' and 'apply'

************************/
*** LEARN AGAIN ***


*** LEARN AGAIN ***
/************************
Calling on a solution
  Let's talk about using call or apply to set the this context for a function before it is run

************************/
    function Person(name){
        this.name = name;
        this.friends = [];
    }

    Person.prototype.addFriend = function(name){
        this.friends.push(new Person(name));
    };

    function Student(name){
        // masks all the constructor properties
        Person.call(this);
        this.name = name;
    };

    Student.prototype = new Person()
    Student.prototype.constructor = Student;
/************************
  Unfortunately, this breaks the Law of Demeter or Priniciple of Least Knowledge, which is that modular units should have a very limited knowledge of the other units they are tied to.
************************/
function Pet(name, age){
  this.name = name;
  this.age = age;
}; 

for (var i = Things.length - 1; i >= 0; i--) {
  Things[i]
};

for (var i = 0; i < Things.length; i++) {
  Things[i]
};

Weekend Review 
* finish todays labs 
* All notes, all exercises 




Weekend Lab 
* randomize the board, will take research 
* could use each method to select a div and get an email 
* could use constructor to set properties on the board,

If Time Permits 
* TDD Lab - apartment lab; reqs knowing how to sepearate files in node 
