// // Promise chain

// function asyncFunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Some Data 1");
//       resolve("Success");
//     }, 4000);
//   });
// }

// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Some Data 2");
//       resolve("Success");
//     }, 4000);
//   });
// }

// console.log("Fetching data 1...");
// let p1 = asyncFunc1();
// p1.then((res) => {
//   console.log(res);
//   console.log("Fetching data 2...");
//   let p2 = asyncFunc2();
//   p2.then((res) => {
//     console.log(res);
//   });
// });
//********************************************************** */

// console.log("Fetching data 2...");
// let p2 = asyncFunc2()
// p2.then((res)=>
// {
// console.log(res);
// })

// let promise = new Promise((resolve, reject) => {
//   console.log("I am a promise");
//   resolve(123);
// });

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     resolve("Success");
//   });
// };

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     reject("network Error 1");
//   });
// };

// let promise = getPromise();
// promise.then((res)=>
// {
//   console.log("Promise fullfilled",res);
// })

// promise.catch((err)=>
// {
//   console.log("rejected",err);
// })

//in case of API
// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("success")
//       if (getNextData) {
//         getNextData();
//       }
//     }, 5000);
//   });
// }

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 2000);
  });
}

// getData(1).then((res) => {
//   console.log(res);
//   getData(2).then((res) => {
//     console.log(res);
//   });
// });

// alternate way

getData(1)
  .then((res) => {
    return getData(2);
  })
  .then((res) => {
    return getData(3);
  })
  .then((res) => {
    console.log(res);
  });

// doing above by promise chain
// let p1 = getData(1)
// p1.then((res)=>
// {
//   console.log(res);
// })
