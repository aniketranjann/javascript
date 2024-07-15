const accountId = 1223 // value is locked 
let accountEmail = "aniket@gmail.com"
var accountPassword ="12345"
accountCity = "Jaipur"

//const accountId=222 //not allowed
accountEmail = "abc@gmail.com"
accountPassword = "5252"
accountCity = "Patna"



console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
console.table([accountId,accountEmail,accountPassword,accountCity])
let accountState;
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*
	• Variables can be declared using let and Var keyword.
	• We do not use var 
	• Problem of scope - {   }  , initially js does not work on basis of scope Using let there is no problem of scope.
    prefer not to use var because of issue in block and functional scope.
    When we just declare the variable without assigning the value , it is undefined.
*/