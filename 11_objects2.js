// using singleton or constructor 

//const tinderUser = new Object{}

const tinderUser = {}
// non singleton object 
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUser ={
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname:"Aniket",
            lastname: "Ranjan"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}

// const obj3 = {obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2)
// return modified target object 
const obj3 = {...obj1,...obj2}
console.log(obj3);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// does the object has isLoggedIn key/property