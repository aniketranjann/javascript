let score = "33abc"

// console.log(typeof score);

let valueinNumber = Number(score)

// console.log(typeof valueinNumber);
// console.log(valueinNumber)

// null = 0
// undefined = NaN
// boolean = true -> 1

// "33"=>33
//"33abc"=> Not a Number
//true => 1; false =>0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// "" => false in case of empty string 
// name => "Aniket" => give true in isLoggedIn 
// 1 => true ; 0 => false 

 let someNumber = 33
  let stringNumber = String(someNumber)
//   console.log(stringNumber);
//   console.log(typeof stringNumber);

// ************** Operations ****************
 let value = 3
 let negValue = - value 
 console.log(negValue);

let str1 = "Hello"
let str2 = " Aniket"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log((1+"2"));
console.log("1"+"2");
console.log("1"+2+2);// If string first , then everything will be treated as string 
console.log(1+2+"2");// if string is at last then everything is calculted and then operated with string at last

console.log((3+4)*5%3);

console.log(+true);
console.log(+"");

let num1,num2,num3
num1 = num2 = num3 = 2+2

let gameCounter = 100
gameCounter++;
console.log(gameCounter);
