/************************
2014-11-24 //class 6
  https://github.com/sf-wdi-15/notes/tree/master/week_02_intro_to_oop_and_fp/day_1_testing_and_iterators/dawn_testing
************************/

/************************
  Testing 

NPM is called the Node Package Manager it will be helping us install packages and libraries that we can use to build our Node projects. To get started do the following:

  * Go into a new project folder, mkdir new_project and cd new_project.
  * Initialize a new Node project using a special command npm init.
  * Just hit enter for name, version, description, et cetera. You don't need to know what all these mean just yet.

  Look inside your current directory and you should now have a package.json file. If you cat package.json you'll see that it just looks like a js object. Hence the name package.json.

Install create new directory, 
  mkdir newProject

Initialize NPM in current directory
  node init

Install first Package, include --save to write to package.json
  npm install --save colors
  
  testing if its working
    var colors = require("colors");
    console.log("This is cool".cyan);
    console.log("This is cooler".red)

Note: require("somePackageName") is a method used by node for importing code from external libraries, so you can use it in your projects. If the package you try to require isn't installed this won't work.

Install dependencies using npm install, will read the package.json
  npm install

************************/

/************************
  Making Assertions

************************/
READ the notes - https://github.com/sf-wdi-15/notes/blob/master/week_02_intro_to_oop_and_fp/day_1_testing_and_iterators/dawn_testing/testing.md

Lets move away from the incredible world of NPM for a moment and focus our attention back on testing. How would we test if one thing equals another?


/************************
  Installing Mocha - testing framework
  
************************/
install mocha 