// dates are usually declared in milliseconds.

let myDate = new Date()
console.log(myDate);
// try to convert into string 

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);
// to declare specific date 
let myCreateDate = new Date(2023, 0, 23)
console.log(myCreateDate.toDateString());

let myCreateDate1 = new Date(2023, 0, 23,5,3)
console.log(myCreateDate1.toLocaleString());

// in specific formats 
let myCreateDate2 = new Date("2023-01-14")
console.log(myCreateDate2.toDateString());

// timestamp
// gives value of time in milliseconds
// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDate2.getTime());

// --> to get time in seconds
console.log(Math.floor(Date.now()/1000));

// more methods 
let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());


newDate.toLocaleString('default',
{
    weekday: "long"
})