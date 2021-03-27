function isEven(number) {
    if (number%2 === 0) {
        return true;
    }
        return false; 
}

console.log(isEven(3));

function isEvenV1(number) {
  return number%2 === 0; 
}

console.log(isEvenV1(2));

// TODO: Arrow function example

var isEvenV2  = (number) => {
    return number % 2 === 0;
}

console.log(isEvenV2(5));


// TODO: every function example

var result  = [2,4,8,12].every(isEvenV2);
console.log(result);

console.log([2,4,9,12].every(isEvenV1));


/*
    without using a return keyword () => ()
*/
var resultCallBack = [2,3,8,9].every((element) => (element%2 === 0));
console.log(`resultCallBack = ${resultCallBack}`);

/*
    using a return Keyword () => {}
*/
var resultCallBackWithReturn = [2,4,6,8].every((e) => {return  e % 2 === 0});
console.log(`resultCallBackWithReturn = ${resultCallBackWithReturn}`);
