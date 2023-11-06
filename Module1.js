/* export default function helloWorld(){
    console.log("Hello World")
} */

/* export class Greeter{
    sayhelloTo(name){
    
    console.log("hello" +name)
}
} */

export class Greeter{
    constructor (Greername){
    this.Greername = Greername;
    }
    sayhelloTo(name){
    
    console.log("hello" +name + "from"+this.Greername)
}
}

export const person = {
    name:"Shalini",
    age: 30
    
}

