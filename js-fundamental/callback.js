//callback is a function which is called after the orignal function is executed.

function greet(name, callback) {
  console.log("Hellow my name is:", name);
  callback();
}

greet("vishal", () => {
  console.log("callback executed");
});

function f1(callback) {
  console.log("F1 executed!!");
  setTimeout(() => {
    console.log("callback for f1 executed!!");
    callback(); // call next function
  }, 1000);w
}

function f2(callback) {
  console.log("F2 executed!!");
  setTimeout(() => {
    console.log("callback for f2 executed!!");
    callback();
  }, 1000);
}

function f3(callback) {
  console.log("F3 executed!!");
  setTimeout(() => {
    console.log("callback for f3 executed!!");
    callback();
  }, 1500);
}

f1(() => {
  f2(() => {
    f3(() => {
      console.log("Callback hell");
    });
  });
});