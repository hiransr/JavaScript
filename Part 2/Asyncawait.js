function resolveAfter2Secs() {
    return new Promise((resolve) => { setTimeout(() => { resolve("Solved") }, 3000); });
}
async function asyncFunction() {
    console.log("Calling");
    let result = await resolveAfter2Secs();
    console.log(typeof result);
}
asyncFunction();
// Detailed program for the same given above....!!

// async function myDisplay() {
//     let myPromise = new Promise(function(resolve) {
//       setTimeout(function() {resolve("I love You !!");}, 3000);
//     });
//     document.getElementById("demo").innerHTML = await myPromise;
//   }
//   myDisplay();