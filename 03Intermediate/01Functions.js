function sayHello() {
    console.log("Hello there, Everyone");
}

sayHello();
sayHello();

// sayHello() ---> calling a function
// sayHello   --> referencing a function we use these with DOM and other frameworks

function sayHello(name) {
    //console.log("Hello there, Everyone");
    console.log("Hello there,", name);
}

sayHello();
sayHello();

function sayHello(name) {
    // console.log("Hello there, Everyone");
    console.log("Hello there,", name);
}

sayHello("Virat");
sayHello("Kohli");

function sayHello2(name) {
    console.log(`Hello there ${name}. How are you doing?`);
}

sayHello2("Hitesh");
sayHello2("Sammy");

function namastey() {
    return "Hello in India!";
}

var greetings = namastey();
console.log(greetings);
