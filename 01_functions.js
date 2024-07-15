function sayMyName() {
  console.log("A");
  console.log("N");
  console.log("I");
  console.log("K");
  console.log("E");
  console.log("T");
}

// sayMyName()
// function addTwoNumber(number1 , number2) //parameters
// {
//    console.log( number1+number2);
// }
// const result = addTwoNumber(3,4)//arguements
// console.log("Result: ",result);

// function addTwoNumber(number1 , number2) //parameters
// {
//   let result = number1 + number2
//   return result
//   console.log("After return function will not execute anything");
// }

function addTwoNumber(number1, number2) {
  //parameters
  return number1 + number2;
  console.log("After return function will not execute anything");
}
const result = addTwoNumber(3, 4); //arguements
console.log("Result: ", result);

function loginUserMessage(username = "sam") {
  if (username === undefined) {
    console.log("Please enter the username");
    return;
  }
  return `${username} just logged in`;
}
console.log(loginUserMessage("Aniket"));
console.log(loginUserMessage());

//************Shopping Cart problem *****************/
// we are not sure about the number of parameters to be passed 
// use rest operator , passing multiple parameters
function calculateCartPrice(...num1)
{
return num1
}
console.log(calculateCartPrice(200,400,500));

function calculateCartPrice1(val1,val2, ...num1)
{
return num1
}
console.log(calculateCartPrice1(200,400,500,700));

// passing object in username
const user ={
    username : "Aniket",
    price : 199
}

function handleObject(anyobject)
{
console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

// can pass object directly

handleObject({
    username : "User1",
    price : 100
})

// passing arrays in funtion 
const myNewArray = [2000,200,100]

function returnSecondValue(getArray) {
    return getArray[1]
    
}
console.log(returnSecondValue(myNewArray));