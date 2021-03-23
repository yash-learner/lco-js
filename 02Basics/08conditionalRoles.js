// Create  an application with following roles:

// admin - get full accesss
// subadmin - get access to create/delete courses
// testprep - get access to create/delete tests 
// users - get access to consume content 

var user = "user";

switch (user) {
    case "admin":
        console.log("You get full access");
        break;
    case "subadmin":
        console.log("You get access to create/delete courses");
        break;
    case "testprep":
        console.log("get access to create/delete tests");
        break;   
    case "user":
        console.log("get access to consume content");
        break;    
    default:
        console.log("Trail User!")
        break;
}


// if we remove break statement at all the cases then 
// it uses fall through i,e. all the statements will be executed