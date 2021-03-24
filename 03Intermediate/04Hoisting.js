/*
TODO:
There are two main types of contexts in javascript:
1. global context ---> collecting information for everything and about anything
   window object tied with browser --> important for local storage.
2. Execution context ---> One that is excuting right now
   execution context happens with every line of code that you what to get executed.
   This like a memory stack --> It comes and goes away.
*/

/*
TODO:

Execution context brings in three elements:
three of them are:
1. Variable Object
2. Scope Chain
3. this

There are two main rules:
--> Function declarations are scanned and made avaliable.
--> variable declarations are scanned and made undefined.


*/


/*

function tipper(a) {
    var bill = a;
    console.log(bill + 5);
}

tipper(5);
tipper("5");  //coercion is happening here

*/

// TODO: code to overcome above misbehaviour of code
// example for global context and rule 1 --> function declarations are scanned and made avaliable.

tipper(5);
tipper("5");  //coercion is happening here

function tipper(a) {
    var bill = parseInt(a);
    console.log(bill + 5);
}



// example for rule 2 --> variables are scanned and made undefined

/* 

bigtipper("200");
bigtipper(50);

var bigtipper = function(a) {
    var bill = parseInt(a);
    console.log(bill + 5);
}

// To overcome above misbehaviour of code first declare and then call the function.

*/

// another example for rule 2


console.log(name);
var name = "JavaScript";

function sayName() {
    var name = 'Mr.h';
    console.log(name);
}

sayName();
console.log(name);

