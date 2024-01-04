// objects can be declared in two ways 
// 1. literals 2.Constructor
// singleton object is creted when we try to make objects through constructors.
// object.create --> singleton method 

// creating symbol
const mySym = Symbol("key1")
//creating object 
const JsUser = {
    name:"Aniket",
    "full name":"Aniket Ranjan",
    [mySym]:"mykey1",
    age: 18,
    email: "aniket@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}
// acessing the value 
console.log(JsUser.email);
console.log(JsUser["email"]);// object takes the name of keys as string 
console.log(JsUser[mySym]);


JsUser.email = "aniket@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email= "aniket@microsft.com"
console.log(JsUser);

//In JS function can be treated as variables 
JsUser.greeting = function()
{
    console.log("Hello JS user");
}

JsUser.greetingTwo = function()
{
    console.log(`Hello JS user ,${this.name}`);
}
// console.log(JsUser.greeting);// [Function (anonymous)]
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());