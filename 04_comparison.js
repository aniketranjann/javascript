// compare same datatypes
console.log("2">1);
console.log("02">1);
// TYPESCRIPT DOES NOT ALLLOW TO COMAPRE 2 DIFFERENT DATA TYPES

console.log(null>0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined>0);
console.log(undefined == 0);
console.log(undefined >= 0)

// Strict check not only check value but their data type also.
console.log(("2"===2));