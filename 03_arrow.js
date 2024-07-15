// this tells about the current context.
const user = {
  username: "Aniket",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};
user.welcomeMessage();
user.username = "Sam";
user.welcomeMessage();

//console.log(this);
// output : {}, in browser it is window object.

//+++++++++++++++++ ARROW +++++++++++++++++++++
// function coffee ()
// {
//     console.log(this);
// }
// coffee()
// function coffee ()
// {
//     let username = "Aniket"
//     console.log(this.username);
// }
// coffee()

// const chai = function () {
//   let username = "Aniket";
//   console.log(this.username);
// };

const chai = () => {
  let username = "Aniket";
  console.log(this.username);
};
chai();

// arrow function

const addTwo = (num1, num2) => {
  return num1 + num2;
};
console.log(addTwo(3, 4));

// now , implicit return
const addTwo1 = (num1, num2) =>  num1 + num2;
// const addTwo1 = (num1, num2) =>  (num1 + num2);
console.log(addTwo(3, 4));//7

// we have to return the object
const addTwo3 = (num1, num2) =>  ({username : "Aniket"});
console.log(addTwo3());


// const myArray = [2,5,2,7,9]
// myArray.forEach()