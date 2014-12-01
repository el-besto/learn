DOM Events
Objectives
* Students should be able to select elements from the DOM using selectors
* Students should be able to add events to elements in the DOM
* Students should be able to manage scope and control logic with the page.

DOM Intro Outline 
Structuring page
  DOM Selection
  * document#getElementById
  * DOM Manipulation
    * style
    * innerHTML
    * value
    * attributes
  * document.querySelector

  DOM Events
  * monitorEvents
  * onClick
  * hovering or mouseover
  * window.onload
  Event Context
  * this
  * addEventListener

Analogy through venn diagram 
  HTML = noun 
  JavaScript = verbs 
  CSS = adjectives

/*******************************************************************************
 *******************************************************************************
Selectors 
 *******************************************************************************
******************************************************************************/
examples using Js selectors

var greetingDiv = document.getElementById("greeting");
greetingDiv.innerHTML = "You Got Changed!";
var elements = document.getElementsByTagName("div");
greetingDiv.style.color = "blue"; //to change anything related to style, .style. then the attribute you want to change. Diff between CSS attr and JS, use camelCase
greetingDiv.style.backgroundColor = "yellow";
greetingDiv.style.backgroundSize = '200';


// must grab value instead of innerHTML
var inputField = document.document.getElementById("petName");
inputField.value // not inputField.innerHTML

<input> = single-line input field
<textarea></textarea> = multi-line input

+++++ lookup other methods on MDN

/*******************************************************************************
 *******************************************************************************
Query Selectors 
 *******************************************************************************
******************************************************************************/
Selects element using CSS selector (e.g. #someId for id, .someClass for class)
grabs first element it finds that satisfies selector 

var greetingDiv = document.querySelector("#greeting"); // will return first element that it finds with the selector

querySelectorAll("div") // returns a list of all selectors on page
var divs = document.querySelectorAll("div");
for (var i = 0; i < divs.length; i++){
  divs[i].innerHTML = ""; // will replace all divs on page with an empty string
}

+++++ gothrough notes to get a better sense of query selectors 

/*******************************************************************************
 *******************************************************************************
Monitor Events
 *******************************************************************************
******************************************************************************/

example:
var greetingDiv = document.querySelector("#greeting");

greetingDiv.onClick = function(event){
  greetingDiv.style.backgroundColor = "gray";
  greetingDiv.innerHTML = "You've been changed!";
};

window.onLoad = function(){
 //ensures the scripts will run, and all elements on page are there.
 //can put it in <head> so it's cached
}