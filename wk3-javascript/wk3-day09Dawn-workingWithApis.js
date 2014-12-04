/************************
2014-12-02 //class 9
  https://github.com/sf-wdi-15/notes/tree/master/week_03_express_sql/day_2_intro_apis/dawn_apis
************************/

Working with APIs

/************************
Objectives
  * Know what API stands for
  * Not get scared when hear the term API
  * See some examples of APIs
  * Build OMDB API example

************************/

Application Programming Interface

/************************
Programs talking to (i.e., interfacing with) each other.
  * Browser <-> Browser (e.g., Your JS calls Google Maps)
  * Browser <-> Server (e.g., Your JS calls your server)
  * Server <-> Server (e.g., Your server calls someone else's)
  * Server <-> Database (e.g., Even your database has an API)

Where else in computing do we see the term "interface"?
  * GUI = Graphical User Interface = [U]sers interacting with programs
  * API = Application Programming Interface = [P]rograms interacting with programs

So in a general sense, an interface is what?
************************/

Keyword: Interface

/************************
Where else in computing do we see the term "interface"?
  * GUI = Graphical User Interface = [U]sers interacting with programs
  * API = Application Programming Interface = [P]rograms interacting with programs

So in a general sense, an interface is what?
************************/
Browser has an API

document.getElementById()
Why?
Because document.getElementById() allows us to interface with the DOM which in turn, allows Javascript code to manipulate the content/presentation of a web page
window.onload = function () {}
What makes this an API?
Is this part of a larger group?
Yes, this is part of the event handling interface in most browsers.
Includes events like "onclick", "onfocus", etc.

**DO MORE NOTES AND DONT FORGET THE HW 