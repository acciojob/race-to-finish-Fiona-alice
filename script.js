window.promises = [

// Do not change the code above this
// add your promises to the array `promises`
let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise1");
  }, 1000);
});
let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise2");
  }, 2000);
});
let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise3");
  }, 3000);
});
let promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise4");
  }, 4000);
});
let promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise5");
  }, 5000);
});
]
Promise.any(promises).then((result)=>{
	document.getElementById("output").innerHTML=result;
});