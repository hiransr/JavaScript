var promise = new Promise((resolve, reject) => {
    let a = 0;
    if (a) {
        resolve("Success");
    }
    else {
        reject();
    }
});
promise.then((message) => {
    console.log(message + " from resolve part");
}).catch(() => {                                      //anonymous function
    console.log("Failed from reject part");
});
/* 
var promise = new Promise((resolve,reject)=>{
    let a=0;
    if(a){
        resolve("Success");
    }
    else{
        reject();
    }
});
promise.then(function(message){
    console.log(message+" from resolve part");
}).catch(function(){                             
    console.log("Failed from reject part");
});
*/