const myArr = [0,1,2,3,4,5]
const myHeros = ["Iron Man","Captain America"]

const myArr2 = new Array(1,2,3,4)

// Array methods 

myArr.push(6)
myArr.push(7)
console.log(myArr);
myArr.pop()
console.log(myArr);
myArr.unshift(9)// added at start of the array
console.log(myArr);
myArr.shift()
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join() // new arr will be of type string 
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

// Slice and Splice 

console.log("A", myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B",myArr)
const myn2 = myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2);

//Splice manipulates the original Array.
