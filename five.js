// For each loop 
const coding = ["js","ruby","py","java","cpp"]

// callback function , and it does not have name 
// coding.forEach( function (val) {
// console.log(val);
// } )

// coding.forEach(  (item) => { 
// console.log(item);
// })

function printMe(item)
{
    console.log(item);
}

coding.forEach(printMe)

coding.forEach((item, index, arr)=> {
console.log(item, index, arr);
})

const myCoding = [
    {
        languageName : "Javascript",
        languageFile : "js"
    },
    {
        languageName : "Python",
        languageFile : "py"
    },
    {
        languageName : "C++",
        languageFile : "cpp"
    }
]

myCoding.forEach((item)=>{
console.log(item.languageName);
})