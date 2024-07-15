const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.2429
console.log(otherNumber.toPrecision(3));// use carefully and converts the output into string 

const hundreds = 1000000.
console.log(hundreds.toLocaleString('en-IN'));

// ********** MATHS ****************
console.log(Math.abs(-5));
console.log(Math.round(4.4));
console.log(Math.ceil(4.4));
console.log(Math.floor(4.4));
console.log(Math.max(1,5,2,8));
console.log(Math.min(1,5,2,8));

console.log(Math.random());//comes between 0 and 1 
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);


const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min + 1) )+ min);