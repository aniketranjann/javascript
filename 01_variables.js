const accountId = 144553
let accountEmail = "aniket@google.com"
var accountPassword = "12345"
// var has scope problem
accountCity = "Patna"
let accountState;

//accountId = 2 // not allowed
accountEmail = "ar@ar.com"
accountPassword="212121"
accountCity = "BBSR"

console.log(accountId);
/*
prefer not to use var 
because of issue in block scope and functional scope.
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])