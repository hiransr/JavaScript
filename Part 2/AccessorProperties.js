let person={
    firstName: "Hiran",
    lastName: "Vikraman"
};
Object.defineProperty(person, 'fullName', {
    get: function(){
        return this.firstName+" "+this.lastName;
    },
    set: function(value){
        let x=value.split(" ");
        if(x.length == 2){
            this.firstName = x[0],
            this.lastName = x[1]
        }
        else
            throw "Invalid Name Format"
    }
}
);
console.log(person.fullName);