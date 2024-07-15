// const userEmail = "a@gmail.com"
// const userEmail = ""
const userEmail = [];
// we have assumed it as a true value without comparing it with something
if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

// falsy value
/*
false , 0, -0, BigInt, 0n , "", null, undefined, NaN

*/

// Truthy value
/* "0" , 'false', " " ,[], {}, function(){}
 */

// if (userEmail.length === 0) {
//   console.log("array is empty");
// }

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("Array is empty");
}

//******************************NULLISH COALESCING OPERATOR (??) : null undefined *************************************/
let val1;
val1 = 5 ?? 10 //5
val1 = null ?? 10 // 10
val1 = undefined ?? 15
console.log(val1);
val2 = null ?? 10 ?? 15
console.log(val2);

/****************************************Terniary Operator *******************************/
// condtion ? true : false
const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("Less than 80") : console.log("More than 80")