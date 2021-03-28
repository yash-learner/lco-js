// TODO: fill() 

var testArray = [2,4,8,9,3,7,11];
console.log(testArray.fill("LCO"));

console.log(testArray.fill("Learn",2));
console.log(testArray.fill("code",4,6));
console.log(testArray.fill("online",6));

// fill(value, start-index, end-index);
// end-index is exclusive and start index is inclusive


// TODO: filter(expects a callback function)
// returns a new array
var myNumber = [21,20,34,45,55,89,64];
console.log(myNumber.filter((num) => (num % 2=== 0)));


// TODO: slice(start-index, end-index)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
var users = ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"];
var sliceResult = users.slice(1,4);
console.log(sliceResult);
console.log(users);
users[1] = "Man";
console.log(sliceResult);
console.log(users);


//console.log(users.slice(1,4));

// TODO: splice(start-index, count value, value to replaced with elements present in th count range)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
var users = ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"];
// console.log(users.splice(1,3,"Hi")); // This has different behaviour
// console.log(users);

// var users = users.splice(1,3,"Hi");
// console.log(users);

// users.splice(1,3,"Hi")
// console.log(users);

/* TODO: https://www.freecodecamp.org/news/copying-stuff-in-javascript-how-to-differentiate-between-deep-and-shallow-copies-b6d8c1ef09cd/

https://www.tothenew.com/blog/javascript-splice-vs-slice/

*/

