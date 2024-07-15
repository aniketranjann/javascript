// scope = {}
let a = 300
if (true) {
  let a = 10;
  const b = 20;
  // console.log("Inside",a);
//   var c = 30;
}

// console.log(a);
// console.log(b);
//console.log(c);

function one()
{
    const username = "Aniket"
    function two ()
    {
        const website = "Youtube"
        console.log(username);
    }
    //console.log(website);//scope of website was inside two() only.
    
    two()
}
// one()

if (true) {
  const username = "Aniket"
  if(username === "Aniket")
    {
      const website = "Youtube"
      console.log(username + website);
    }
  //console.log(website);
}
//console.log(username);

//++++++++++++++++++++ intresting +++++++++++++++++++++++++++
console.log(addOne(5));

function addOne(num) {
  return num + 1;
  
}
// console.log(addOne(5));

//expression holding function
const addTwo = function(num)
{
  return num +2
}
addTwo(5)