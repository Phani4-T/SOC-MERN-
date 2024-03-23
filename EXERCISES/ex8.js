class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}
class Employee extends person{
    constructor(name,age,role){
        super(name,age);
        this.role=role;
    }
    
}
const employee1=new Employee("Phani",20,"SDE");
console.log("Name Is:"+employee1.name);
console.log("Age is:"+employee1.age);
console.log("Role is:"+employee1.role);
