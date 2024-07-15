let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());

console.log(typeof myDate);//object

// let myCreateDate = new Date(2024,0,23)
// let myCreateDate = new Date(2024,0,23,5,3)
// let myCreateDate = new Date("2024-01-27") //yy-mm-dd
let myCreateDate = new Date("01-14-2024")
console.log(myCreateDate.toDateString());
console.log(myCreateDate.toLocaleString());


// Timestamp -- help during polls and quizzes 

let myTimeStamp = Date.now()
console.log(myTimeStamp);// millisecond value from fixed date in JS
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));


// more methods
let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());


newDate.toLocaleString('default',{
    weekday : "long",
    
})
console.log(newDate);


