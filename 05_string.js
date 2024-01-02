const name = "Aniket"
const repoCount = 50

//console.log(name + repoCount + "Value");
// string interpolation using bactics
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

// another method of declaring a string 
const getName = new String ("AniketRanjan")
console.log(getName[0]);// it is showing key value pair 
// strig is not array here , rather is an object 
console.log(getName.__proto__);
console.log(getName.length);
console.log(getName.toUpperCase());// doesn't change the original Value of string
console.log(getName.charAt(2));
console.log(getName.indexOf('R'));// case sensitive 

// more methods 
const getName1 = new String("aniket-ranjan");
const newString = getName1.substring(0,4);
console.log(newString);

const anotherString = getName1.slice(-12,4);
console.log(anotherString);


const newStringOne = "   aniket    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://aniket.com/aniket%20ranjan";
console.log(url.replace('%20','-'));

console.log(url.includes('aniket'));

// conevrsion of string into array based on dash , space or anyting.

console.log(getName1.split('-'));