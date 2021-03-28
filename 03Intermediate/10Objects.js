var user = {
    firstName : "Yaswanth",
    lastName  : "Bethu",
    role      : "Admin",
    loginCount : 23,
    faceBookSignedIn : true
};

console.log(user.firstName);
console.log(user["lastName"]);
//console.log(user[lastName]); // error --> argument should be in ""

user.loginCount = 55;
console.log(user.loginCount);

console.log(user);
console.table(user);


