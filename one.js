// if
// const temperature = 41
// if (temperature === 41) {
//     console.log("Less than 50");

// }
// else{
//     console.log("temperature is greter than 50");
// }

// console.log("execute");

// const score = 200
// if(score > 100 )
// {
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }
// //console.log(`user power: ${power}`);

const balance = 1000;
// if(balance > 500) console.log("test");

//************Nesting************/
// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance < 700) {
//   console.log("less than 750");
// } else if (balance < 900) {
//   console.log("Balance less than 900");
// } else {
//   console.log("Less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
  console.log("Allowed to buy course");
}

if (loggedInFromEmail || loggedInFromGoogle) {
  console.log("You are logged in");
}

