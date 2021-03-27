// TODO: Read MDN mozilla devloper documentation 

var countries = ["India", "USA", "England", "Australia", "Russia"];

var states  = new Array("Andhra Pradedsh", "Ohio", "Pennsylvania", "Sebiria", "Melbourne", "Lords");

console.log(countries);

console.log(states[0]);

console.log(states.length);

states[0] = "Rajasthan";
console.log(states);

var user  = ["Hitesh", "hitesh@lco.dev", 5, 27, true];
console.log(user);

user.pop();
user.pop();
console.log(user);

user.unshift("New-Value");
console.log(user);

user.shift();
console.log(user);


console.log(user.indexOf(5));
console.log(user.indexOf("Hitesh"));
console.log(user.indexOf(58)); // returns -1 if the element is not found

console.log(Array.from("learn"));



