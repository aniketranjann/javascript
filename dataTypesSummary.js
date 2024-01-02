// primitive 
//call by value (changes in copy)
// 7 types : string, number , boolean , null,undefined , symbol, BigInt

const score =100
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null
let userEmail = undefined
// let userEmail
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 234567899876543n


// refernce or (Non- primitive)
// refernce is directly allocated 

// array , objects , functions 
const heros = ["shaktiman","naagraj","doga"]

// objects 
let myObj = {
    name : "ANiket",
    age : 22,
}
const myFinction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);

//****************************************
//stack (Primitive), get copy of the varible 
//Heap (Non-Primitive), get the refrence of original value 

let myYtname = "Aniketranjandotcom"
let anothername = myYtname
anothername = "chaiaurcode"

console.log(myYtname);
console.log(anothername);


let userOne = {
    email: "user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne 
userTwo.email = "Aniket@google.com"

console.log(userOne.email);
console.log(userTwo.email);

