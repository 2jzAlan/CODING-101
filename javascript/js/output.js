//JavaScript; a programming language that allows you to implement complex 
//functionalities on web pages.

//API (Application Programming Interfaces) provide functionality such as dynamically
//creating HTML and setting CSS styles.

//function is a block of JavaScript code, that can be executed when "called" for.
//A computer program is a list of "instructions" to be "executed" by a computer
//In a programming language, these programming instructions are called statements.
//A JavaScript program is a list of programming statements.

//Semicolons separate JavaScript statements. 
//Add a semicolon at the end of each executable statement:

//JavaScript ignores multiple spaces. You can add white space to your script to make it more readable.
//A good practice is to put spaces around operators ( = + - * / ):
//If a JavaScript statement does not fit on one line, the best place to break it is after an operator:


function myFunction() {
    document.getElementById("demoTwo").innerHTML = "Invoked by function myFunction()";
    }
//generate text invoked by function when button is clicked

function documentWrite() {
    document.write("string by: document.write");
    }
//For testing purposes, it is convenient to use document.write():
//Using document.write() after an HTML document is loaded, will delete all existing HTML:

function windowAlert() {
    window.alert("string by: window.alert");
    }
// generates an alert box to display data

function consoleLog() {
    console.log("string by: console.log");
    }
//For debugging purposes, you can call the console.log() method in the browser to display data.

function windowPrint() {
    window.print();
    }
//you can call the window.print() method in the browser to print the content of the current window.

function myStatement() {
    let x, y, z;  // Statement 1
    x = 2;        // Statement 2
    y = 3;        // Statement 3
    z = x + y;    // Statement 4   
    document.getElementById("demoThree").innerHTML = "The value of z is " + z + ".";
    document.getElementById("demo").innerHTML = "Generated text through ID tag";
    }
//JavaScript statements are composed of: Values, Operators, Expressions, Keywords, and Comments.
//To access an HTML element, JavaScript can use the document.getElementById(id) method.
//The id attribute defines the HTML element. The innerHTML property defines the HTML content
//JavaScript statements can be grouped together in code blocks, inside curly brackets {...}.


