// array can be mixed up of various data types in javascript
// it is resizable 
// zero indexed 
// javascript array-copy operation create shallow copies 

// shallow copy = a shallow copy of an objesct is a copy whose properties share the same reference.
// deep copy = a deep copy of an object is copy whose propeties do not share the same reference point.

// declartion 
const myArr = [0,1,2,3,4,5]
const myHeros = ["Iron man","Hulk"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);

// Array Methods 
// myArr.push(6)
// myArr.push(7)
// myArr.pop();

myArr.unshift(9)
myArr.shift();

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join()
console.log(myArr);
console.log(newArr);// type is string in newArr

// slice , splice

console.log("A",myArr);
const myn1 = myArr.slice(1,3);


console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3);
console.log("c",myArr);
console.log(myn2);

// splice manipulates the original array