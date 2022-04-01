const fruits=['Apple','Banana','Cherry']; //String Array 
const points=[1,6,25,100,90,30,39,99];
//Array Methods
console.log(`Length ${fruits.length}`);
console.log(`Join: ${fruits.join(', ')}`);
console.log(`Index: ${fruits.indexOf('Banana')}`);
console.log(`Push: ${fruits.push('Orange')}`);
console.log(`Pop: ${fruits.pop()}`);
console.log(`Splice: ${fruits.splice(-2,1,'Pineapple','Mango')}`); //start,count,new element
console.log(fruits);
console.log(`Shift: ${fruits.shift()}`);
console.log(`UnShift: ${fruits.unshift('Banana')}`);
console.log(fruits);
console.log(`Sort: ${fruits.sort()}`);
console.log(`Reverse: ${fruits.reverse()}`);
console.log(`Num sort in asc order ${points.sort((a,b)=>{
    return a-b;
})}`)
console.log(`Num sort in des order ${points.sort((a,b)=>(b-a))}`);  //different return in call back
//Array Iteration
console.log("\nARRAY ITERATION: ");
for(let i of fruits){
    console.log(i);
}

//array.map
//array.every
//array.reduce
//array.filter