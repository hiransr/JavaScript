let arr = [1, 5, 3, 7, 4, 9];
let sum = arr.reduce(Fun);
console.log("Sum of the array is " + sum);
function Fun(total, value) {
    return total + value;
}