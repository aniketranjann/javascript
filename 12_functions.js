// functions are the line of code capsulated in package and use the copies hwerever we need them
function sayMyName()
{
    console.log("A");
    console.log("N");
    console.log("I");
    console.log("K");
    console.log("E");
    console.log("T");
}

//()-->execution
// sayMyName--> refrence
sayMyName()

// function addTwoNumber(num1,num2)
// {
//     console.log(num1+num2);
// }

// gives output undefined if we directly try to print result through console.log

// return using variable

// function addTwoNumber(num1,num2)
// {
//     // console.log(num1+num2);
//     let result = num1+num2;
//     return result;
//     // no code will be printed after the result
//     console.log("Aniket");//unreachable code 

// }


// directly return
function addTwoNumber(num1,num2)
{
    return num1+num2;
}

addTwoNumber(2,4)
addTwoNumber(2,"4")

const result = addTwoNumber(3,5)
console.log("Result ", result);

function loginUserMessage(username = "Unknown user")
{
    if(username === undefined)
    {
    console.log("Please enter the username");
    return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Aniket"));
console.log(loginUserMessage());

// when we do not pass any values -->undefined is returned.

 