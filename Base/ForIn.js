let obj = { name: "Hiran", age: 20, year: 2001 };
text = "";
for (let x in obj) {
    text += obj[x] + "\n";
}
console.log(text);