const name = "Aniket"
const repoCount = 50
// console.log(name + repoCount + "anything");
// string interpolation using backticks
// we create place holders and directly injects vaiables there 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//another way of declaration

const gameName = new String('Ranjan-fc-com')
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase()); // it doesn't changed the original string
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a')); // first occurence of the char.

const substr = gameName.substring(0,3) // excluding the char at last 
console.log(substr);

const anotherString = gameName.slice(-6,3)
console.log(anotherString);

const newStringOne = "    Aniket.   "
console.log(newStringOne);
console.log(newStringOne.trim()); // remove spaces from start and end.
// works on spaces and line terminators

const url = "https://aniket.com/aniket%20ranjan"
// url.replace('%20','-')
console.log(url.replace('%20', '-'));
console.log(url.includes('aniket'));

// convert string into array , split based on - / spaces
console.log(gameName.split('-')); 


