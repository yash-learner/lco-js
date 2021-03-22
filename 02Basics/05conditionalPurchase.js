// To make  a purchase user must satisfy the following conditions 
// must be loggedIn 
// email is verified 
// card-info  is  verified 
// if any one of the above are missing, stop the purchase

var isLoggedIn = true;
var isEmailVerified = true;
var cardInfo  = true;


// if (isLoggedIn) {
//     console.log("Logged In success!");
//     if (isEmailVerified) {
//         console.log("Email is verified!");
//         if (cardInfo) {
//             console.log("You can make a purchase!");
//         }
//     }
// }


if (isLoggedIn && isEmailVerified && cardInfo)  {
    console.log("User is allowed to make a purchase!")
}
else{
    console.log("User is not allowed to make a purchase!");
}