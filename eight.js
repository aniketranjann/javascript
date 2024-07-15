/**REDUCE : The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order , passing in the return value from the calculation on the preceding elements. The final result of running the reducer across all elements of the array is a single value. */
const myNums = [1, 2, 3];
// const myTotal = myNums.reduce(function(acc, currval) {
//     console.log(`acc: ${acc} and Currval ${currval}`);
//     return acc + currval
// }, 0)

// now using arrow function
const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);
console.log(myTotal);

const shoppingCart = [
  {
    itemName: "JS Course",
    price: 999,
  },
  {
    itemName: "JAVA Course",
    price: 1000,
  },
  {
    itemName: "DSA Course",
    price: 5000,
  },
  {
    itemName: "C++ Course",
    price: 500,
  }
]

const P2pay = shoppingCart.reduce((acc, item)=>acc + item.price ,0)
console.log(P2pay);

