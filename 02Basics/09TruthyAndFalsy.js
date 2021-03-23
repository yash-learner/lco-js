// TODO: Following are fallsy values:
//
// undefined   --> var user;
// null        --> Excepting a value but not we got --> empty
// 0
// ''
// NaN --> Not a number

var user = null;

if (user) { console.log("Condition is true") }

console.log(2+2);
console.log(2+"2"); //22 - js assumes it as string
console.log("2"+2); //22 - js assume it as string

var users = "2";
// js assume loosly
if (2 == users) {
console.log("Condition is true"); }
// strict it checks even the type
if (2 === users) {
console.log("Condition is true"); }

