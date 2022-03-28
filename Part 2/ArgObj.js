let x = sumFunction(1, 3, 9, 5, 8, 9);
function sumFunction() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    console.log("Arguments sum is " + sum);
}