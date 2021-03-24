/*
Define a function that can answer the role of a user:
A user can be on following roles:

admin - with all accesss
subadmin - with access to create/delete courses
testprep - with access to create/delete tests 
users - consume all content 
other - trail user.

Input : getUserRole(name,role)
*/

// function getUserRole(name, role) {
    
//     switch (role) {
//         case "admin":
//             return `${name} is admin with all access.`;
//         case "subadmin":
//             return `${name} is sub-admin with access to create and delete courses.`;
//         case "testprep":           
//             return `${name} is sub-admin with access to create and delete tests.`;
//         case "user  ":
//             return `${name} is a user to consume content`;
//         default:
//             return `${name} is a trail user.`
//     }
// }


// console.log(getUserRole("Hitesh", "admin"))
// console.log(getUserRole("Nitesh", "user"))

var getUserRole = function(name, role) {
    
    switch (role) {
        case "admin":
            return `${name} is admin with all access.`;
        case "subadmin":
            return `${name} is sub-admin with access to create and delete courses.`;
        case "testprep":           
            return `${name} is sub-admin with access to create and delete tests.`;
        case "user  ":
            return `${name} is a user to consume content`;
        default:
            return `${name} is a trail user.`
    }
}


console.log(getUserRole("Hitesh", "admin"))
console.log(getUserRole("Nitesh", "user"))
