// function hello()
// {
// console.log("hello");
// }

// setTimeout(hello, 2000)

// console.log("one");
// console.log("two");

// setTimeout (()=>{
//     console.log("Hello after 4s");
// },4000)

// console.log("three");
// console.log("four");

function sum(a, b) {
  console.log(a + b);
}

// function calculator(a,b, sumCallback)
// {
// sumCallback(a,b);
// }

// calculator(1,2,sum);

// calculator(1,2,(a,b)=>
// {
//     console.log(a+b);
// })

function getData(dataId, getNextData) {
  // it sends the data after 2s

  setTimeout(() => {
    console.log("data", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 3000);
}

// call back hell 

getData(1, () => {
    console.log("getting data 2...");
  getData(2, () => {
    console.log("getting data 3...");
    getData(3,()=>
    {
        console.log("getting data 4...");
        getData(4)
    });
  });
});

// getData(1)//2s
// getData(2)//2s
// getData(3)//2s

// we want data after every 2s delay.
