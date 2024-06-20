// const getPromise=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("I am promise");
//         // resolve("success")
//         reject("Some error occurred");
//     });
// }
// let promise=getPromise();
// promise.then((res) => {
//     console.log("promise fullfilled",res);
// });
// promise.catch((err)=>{
//     console.log("rejected",err);
// });

// // function hello()
// console.log("One");
// console.log("Two")
// setTimeout(()=>{
//    console.log("Hello");
// },4000);
// console.log("THree")
// console.log("One")
// function sum(a,b){
// console.log(a+b);
// }
// function calculator(a,b,sumCallback){
//  sumCallback(a,b);
// }
// calculator(1,2,(a,b)=>{
//     console.log(a+b);
// });
// function getData(dataId,getNextData)
// {
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if(getNextData)
//         {
//             getNextData();
//         }
        
//     },3000);

// }

//Async Await
// async function getAllData(){
//   console.log("getting data1...");
//   await getData(1);
//   console.log("getting data2...");
//   await getData(2);
//   console.log("getting data3...");
//   await getData(3);
//   console.log("getting data4...");
//   await getData(4);
// }
// // Callback Hell.....(Includes the nested callbacks)
// getdata(1,()=>{
//     console.log("getting data2...");
//     getdata(2,()=>{
//         console.log("getting data3...");
//         getdata(3,()=>{
//             console.log("getting data4...");
//             getdata(4);
//         });
//     });
// });


//Promises..

// let promise=new Promise((resolve,reject)=>{
//     console.log("I am promise");
//     // resolve("success");
//     reject("Some error occurred");
// });
//3 states of promise resolve,pending,rejected

// function getdata(dataId,getNextData)
// {return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("data",dataId);
//         resolve("Success");
//         // reject("error");
//         if(getNextData)
//         {
//             getNextData();
//         }
        
//     },3000); 
// })
    
// }

// using async function
// function asyncFunc()
// {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//           console.log("Some data1");
//           resolve("Success");
//         },5000)
//     })
// }
// function asyncFunc2()
// {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//           console.log("Some data2");
//           resolve("Success");
//         },5000)
//     })
// }
// console.log("fetching data1");
// asyncFunc().then((res)=>{
//     console.log("fetching data2");
//   asyncFunc2().then((res)=>{}  //Promise chanining
// );
// });


//Promise chain


// getdata(1).then((res)=>{
//   return getdata(2);})
//   .then((res)=>{
// return getdata(3);
//   }).then((res)=>{
//     console.log(res)
//   });

// getdata(1,()=>{

//       console.log("getting data2...");
//       getdata(2,()=>{
//           console.log("getting data3...");
//           getdata(3,()=>{
//               console.log("getting data4...");
//               getdata(4);
//           });
//       });
//   });



//  async function hello(){
//   console.log("hello");
//  }
