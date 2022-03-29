'use strict';
class samp{
    name;
    constructor(name){
        this.name=name;
    }
    showName(){
        console.log(`My name is ${this.name}`);
    }
}

const obj = new samp("hiran");
obj.showName();