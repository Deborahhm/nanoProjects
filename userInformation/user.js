class user{
    constructor(name, age){
        this.name = name; 
        this.age = age; 
    }

}

function printName(user){
    console.log(`hello, my name is ${user.name}`);
}

function printAge(user){
    console.log(`My age is ${user.age}  I am so old ;_;`)
}

export default user;
export {printName, printAge};