// Show user a sign out button if he is authenticated,
// otherwise show him option to login/signup

var authenticated = true;

// if (authenticated) {
//     console.log("Show signout button!");
// }
// else {
//     console.log("show login option");
// }

authenticated ? console.log("SignOut Button") : console.log("LOGIN");