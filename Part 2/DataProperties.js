//'use strict'; error will be printed if we use Strict.
const obj = {};
obj.year=2022;
Object.defineProperty(obj, "ownerName", {
    configurable: false,
    eumerable: false,
    value: "Hiran"
});
obj.ownerName = "Ajay";
console.log(obj.ownerName); // value is not changed
delete obj.ownerName;
console.log("After Deleting the Property....");
console.log(obj.ownerName); // Value is not deleted
console.log("In for loop...")
for(let x in obj){
    console.log(obj[x]); //Owner will not be printed
}