/* 

    for all regular function calls, this points to window object or global object
    or in case of node empty object 

*/

console.log(this);
// empty object in the case of node and window object in the case of web browser.

var user = {
    firstName : "Hitesh",
    courseCount : 4,
    getCourseCount : function () {
        console.log(`Line 15 ${this}`,this);
        console.log("Line 16 ", this);
        function sayHelloInsideOnject() {
            console.log("this  at regular function call inside a object",this);
        }
        sayHelloInsideOnject(); 
    },
};

user.getCourseCount(); 


function sayHello() {
    console.log("this  at regular function call",this);
}

sayHello();
