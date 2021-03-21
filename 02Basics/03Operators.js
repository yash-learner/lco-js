//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

var num1 = 7;
var num2 =  6;


console.log(num1 * num2);

var answer = num1 > num2;

console.log(answer);

// calculating the discount

//D = ((l - s)/l) * 100;

var sellingPrice  = 199;
var listingPrice  = 799;

var discountPercent = ((listingPrice - sellingPrice) / listingPrice) * 100;

console.log(discountPercent);

var displayDiscountPercentage  = Math.round(discountPercent);

console.log(displayDiscountPercentage);

// typeof is used to find the type of variable in javascript

