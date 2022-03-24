let person={
    firstName : "Hiran",
    lastName : "Vikraman",
    age : 21,
    fullName : function(){
        return this.firstName+" "+this.lastName;
    }
};
console.log(person.fullName());