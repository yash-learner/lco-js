/*
sayHello()

function sayHello()
{
    console.log("Hello World!");
}

//The above is know as global context

*/

var myName = "JavaScript";

if (myName === myName) {
    console.log("This is again True!");
}

/*
var myName = "JavaScript";

if (myName === window.myName) {
    console.log("This is again True!");
}

// The above code show errors because we are executing the js in node but in browser
// but there is always a global context in  javascript
// the context take cares to register everything to get register

// Once the function gets registered then the whole function will get wrapped and put 
// inside a global context

// Every js engine has a context object and in the world of web browser it  is know as 
//window

*/

//TODO: context will helps to understand the weirdness of javascript.

