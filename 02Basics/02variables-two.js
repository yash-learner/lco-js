const uid = "abc123";

// you can't change the value of a const variable

var fullName = "JavaScript";
var email = "js@test.com";
var password = "123456";
var confirmPassword = "123456";
var courseCount = 0;
var isLoggedInFromGoogle = false;

// Taking input from the user

// 1. alert()

// 2. prompt() in this case you need to attach the script with web page
// fullName = prompt("Enter your fullName");
console.log(uid);
console.log("Full Name is:",fullName);
console.log("Full Name is:" + fullName);
console.log(email);


console.log(`
with uniqueid : ${uid}
User is : ${fullName}
and his email is : ${email}
`);

// ${uid} is know as interpolation