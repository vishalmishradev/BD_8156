// promises are one of the key ways to handle async programming.
// Promises has 3 state

// States:
// - pending → initial state
// - fulfilled → operation completed successfully
// - rejected → operation failed

const p1 = new Promise((resolve, reject) => {
  const isTrue = Math.random() > 0.5;
  setTimeout(() => {
    if (isTrue) {
      resolve("p1 resolved");
    } else {
      reject("p1 rejected");
    }
  });
});
const p2 = new Promise((resolve, reject) => {
  const isTrue = Math.random() > 0.5;
  setTimeout(() => {
    if (isTrue) {
      resolve("p2 resolved");
    } else {
      reject("p2 rejected");
    }
  });
});
const p3 = new Promise((resolve, reject) => {
  const isTrue = Math.random() > 0.5;
  setTimeout(() => {
    if (isTrue) {
      resolve("p3 resolved");
    } else {
      reject("p3 rejected");
    }
  });
});

// promises methods

// promise.all() --> This waits for all promises to finish. if all suceed give array of result
// if anyone fails whole thing will failed immediately

Promise.all([p1, p2, p3])
  .then((results) => {
    console.log("promise.all(): ", results);
  })
  .catch((err) => {
    console.log("promise.all(): ", err);
  });

  //The any function returns a promise that is fulfilled by the first given promise to be fulfilled, or rejected with an AggregateError containing an array of rejection reasons if all of the given promises are rejected. It resolves all elements of the passed iterable to promises as it runs this algorithm.

  Promise.any([p1, p2, p3])
  .then((result)=>{
    console.log("Promise.any()", result);
  })
  .catch((err)=>{
    console.log("Promise.any()", err);
  })

  //Creates a Promise that is resolved or rejected when any of the provided Promises are resolved or rejected.


  Promise.race([p1, p2,p3])
  .then((result)=>{
    console.log("Promise.race()", result);
  })
  .catch((err)=>{
    console.log("Promise.race()", err);
  })


  //Creates a Promise that is resolved with an array of results when all of the provided Promises resolve or reject.


  Promise.allSettled([p1, p2, p3])
  .then((result)=>console.log("Promise.allSettled", result))
  .catch((er)=>console.log("promise.allSettled", err));