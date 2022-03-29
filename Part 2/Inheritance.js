class Person{
    name;
    constructor(name){
        this.name=name;
    }
    showName(){
        return `My name is ${this.name}`;
    }
}
class Teacher extends Person{
    subject;
    constructor(sub,name){
        super(name);
        this.subject = sub;
    }
    show(){
        console.log(super.showName()+` and I am your ${this.subject} Proffesor...!`)
    }
    grade(){
        console.log("Your Class Average is "+Number(100-Math.random(1)));
    }
}

const obj = new Teacher("Computer","Hiran");
obj.show();
obj.grade();
