wk1-review.js

// create a  constructor for a pet that has a name, age and color

function Pet (name, color, age){
  this.name = name;
  this.color = color;
  this.age = age;
};

var dog = new Pet("lucky", "negro", "17");

console.log(dog.color);

function SuperHero (name, alterEgo){
  this.name = name;
  this.alterEgo = alterEgo;
};

var superMan = new SuperHero('Super Man', 'clark kent');
superMan.name;







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
    Student.prototype.study = function(){console.log("Maybe later");};

// Try creating a Table constructor that takes numberOfLegs and shape.  }
function Table (numberOfLegs, shape, items){
  this.numberOfLegs = numberOfLegs;
  this.shape = shape;
};

// Add a putOn method that takes a string and pushes it into an array of items. For example I could say table.putOn("plates") for a new table, and the table.items would be ["plates"].
  Table.prototype.putOn = function(item){
        this.items = this.items || [];
        this.items.push(item);
  };
var kitchenTable = new Table (4, 'round');
// kitchenTable.putOn('plates');
kitchenTable.putOn('plates');
kitchenTable.putOn('forks');
kitchenTable.putOn('napkins');
console.log("here is whats on the table " + kitchenTable.items);
function LawnTable (numberOfLegs, shape){
  // this.name = name; 
  // this.numberOfLegs = numberOfLegs;
  this.ready = false;
};
  LawnTable.prototype = new Table();
  LawnTable.prototype.constructor = LawnTable;
  LawnTable.prototype.unfold = function(){  // Add a unfold method to the 
                                            //LawnTable prototype that sets 
                                            //a property ready to true.
    this.ready = true;
  };
  // Add a foldup method to the LawnTable prototype that sets a property ready to be false.
  LawnTable.prototype.foldup = function(){
    this.ready = false;
  };