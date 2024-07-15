//based on the how data is kept in memory and how it is accessed, categorisation of data is done
//Primitive and non-Primitive(reference types)
//Primitive types are call by value.--> original data memory'reference is not given a copy of data is given and changes made are reflected in copy only

//String, Number, Boolean, Null, Undefiend, Symbol, BigInt
// Reference(Non Primitive) == Memory reference is directly allocated.
// Array, Objects, Fuctions

//Symbols
const id = Symbol('123')
const anotherID = Symbol('123')
// console.log(id === anotherID);

const heros = ["A","B","C"]
let myObj = {
    name : "Aniket",
    age : 22,
}

//functions can be also treated as variables
const myFun = function()
{
    // console.log("Hello World");
}

// console.log(typeof heros);//function

/*********************Memory***************** */
/*
Stack -- Primitive type, We get a copy of a variable 
Heap -- Non-Primitive type, We get reference of the original value.
*/

let myYoutubeName = "AniketCodedotcom"

let anotherName = myYoutubeName // copy of variable is given
anotherName = "New YT Channel" // will not change the myYoutubeName value 

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email : "aniket@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne
userTwo.email = "aniket@yahoo.com"

console.log(userOne.email);
console.log(userTwo.email);