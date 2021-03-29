const names = [
    "Youtube",
    "facebook",
    "Instagram",
    "Netflix",
    "Amazon",
];

//TODO: for of loop is majorly used with arrays

for (const n of names) {
    console.log(n);
}

const symbols  = {
    yt : "Youtube",
    ig : "Instagram",
    fb : "facebook",
    lco: "LearnCodeOnline",
};

for (const n in symbols) {
    console.log(
        `key is: ${n} and value is ${symbols[n]}`
    );
}

// const variables can not be reassinged.
// const variables must be assigned at declaration only.
// const means not constant values but constant refernece to a value.
// change properties of an constant object but can NOT reassign object
//change the elements of a constant array but can NOT reassign a constant array


/* recalling hoisting:
   Hoisting is JavaScript's default behavior of moving all declarations 
   to the top of the current scope 
   (to the top of the current script or the current function).

   JavaScript only hoists declarations, not initializations.

   JavaScript in strict mode does not allow variables to be used if they are not declared.
    Study "use strict" in the next chapter.
*/