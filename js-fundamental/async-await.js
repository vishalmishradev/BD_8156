//async function always return a promise
//async await are used to handle promises
//await is keyword that can only be used inside async function

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 resolved");
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2 resolved");
  }, 4000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p3 ressolved");
  }, 1000);
});

async function handlePromise() {
  console.log("Hi! Champ");

  let val1 = await p1;
  console.log("promise 1");
  console.log(val1);

  let val2 = await p2;
  console.log("promise 2");
  console.log(val2);

  let val3 = await p3;
  console.log("promise 3");
  console.log(val3);
}

handlePromise();