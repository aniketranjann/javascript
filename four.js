
//forin
const myObject = {
    js : "Javascript",
    cpp : "C++",
    rb : "Ruby",
    swift : "Swift by apple"
}

for (const key in myObject) {
//    console.log(myObject[key]);
console.log(`${key} shortcut for :  ${myObject[key]}`);
}
const programming = ["js","ruby","py","java","cpp"]
for (const key in programming) {
   console.log(programming[key]);
}

// Map is not iteratable using this loop.

