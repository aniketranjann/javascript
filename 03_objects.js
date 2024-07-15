// object constructor
// Object.create

// object literal

const mySym = Symbol("key1")

const JsUser = {
    name : "Aniket",
    "surname" : "ranjan",
    [mySym] : "mykey1",
    age : 18,
    location : "Patna",
    email : "aniket@gyansys.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday" , "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["surname"]);
console.log(JsUser[mySym]);

JsUser.email = "ranjan@gpt.com"
console.log(JsUser["email"]);

// Object.freeze(JsUser)
JsUser.email = "ranjan@sap.com"
console.log(JsUser);

// functions can be treated as variables 
JsUser.greeting = function()
{
    console.log("Hello JS user");
}

JsUser.greeting2 = function()
{
    console.log(`Hello JS user ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());
