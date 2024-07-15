// const tinder = new Object()
const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "regular@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Aniket",
      lastname: "Ranjan",
    },
  },
};

console.log(regularUser);
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({},obj1, obj2) // {} -> target , obj1 and obj2 --> source

const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

const user = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 2,
    email: "i@gmail.com",
  },
  {
    id: 3,
    email: "j@gmail.com",
  },
];

console.log(user[1].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser)); // output arrays
console.log(Object.values(tinderUser)); // output arrays
console.log(Object.entries(tinderUser)); // individual key value pair

console.log(tinderUser.hasOwnProperty("isLoggedIn"));

// ********************** Objects destructuring ******************************

const course = {
  courseName: "Javascript",
  price: "100",
  courseInstructor: "Rohit",
};

const { courseInstructor : instructor } = course;
// console.log(courseInstructor);
console.log(instructor);

// const navbar = ({company}) => {

// }
// navbar(company = "My Company")

// API looking similar to objects.

// {
//     "name" : "Aniket",
//     "courseName" : "python",
//     "price" : "free"
// }

// API looking similar to arrays.
// [
//     {},
//     {},
//     {}
// ]
