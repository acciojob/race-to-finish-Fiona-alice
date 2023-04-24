window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
let output = document.querySelector("#output");
let random = Math.floor(Math.random()*5)+1;
let prm1 = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		resolve("fulfilled 1");
	}, random*1000);
})
let prm2 = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		resolve("fulfilled 2");
	}, random*1000);
})
let prm3 = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		resolve("fulfilled 3");
	}, random*1000);
})
let prm4 = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		resolve("fulfilled 4");
	}, random*1000);
})
let prm5 = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		resolve("fulfilled 5");
	}, random*1000);
})
// alert(random);

promises.push(prm1)
promises.push(prm2)
promises.push(prm3)
promises.push(prm4)
promises.push(prm5)

Promise.any(promises).then((value)=>{
	output.textContent = value ;
})
