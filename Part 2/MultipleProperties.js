'use strict';
var Company = {};
Object.defineProperties(Company, {
    empName: {
        value: "Hiran",
        enumerable: true,
        configurable: false
        
    },
    joinYear: {
        value: 2022,
        enumerable: true,
        configurable: false
    },
    salary: {
        value: "4 LPA",
        enumerable: true
    },
    role: {
        value: "Developer",
        enumerable: true
    }
});
let des=Object.getOwnPropertyDescriptor(Company,"empName");
console.log(des);
for(let x in Company)
{
    console.log(Company[x]);
}