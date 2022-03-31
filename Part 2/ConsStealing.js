function shape(){
    this.colors=["Orange","Yellow","White"];
}
function triangles(){
    shape.call(this); // calling shape's constructor from this function
}

const obj = new triangles(); // new object creation
console.log(obj.colors); // accessing the variables
obj.colors.push("Green");
console.log(obj.colors);
