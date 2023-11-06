/* import helloWorld from "./Module1.js"
helloWorld() */

//destructering
/* const person={
    FirstName:"Shalini",
    LastName :"pattabi",
    age : 26
}
var{FirstName,...otherattributes}=person
console.log(FirstName)
console.log(otherattributes.age) */

/* const ages =[25,26,30,40]
const [age1,age2,...otherattributes] = ages
console.log(age1) */

/* import {Greeter} from "./Module1.js"
const greeter = new Greeter("arya")
greeter.sayhelloTo("shalini")
const greeter1 = new Greeter("Nagi")
greeter1.sayhelloTo("Mohan") */

import {Logger} from "../logger.js";
import {person}form "./Module1.js";
const logger = new Logger();
logger.logInfo('This is information for $ {person.name}')
logger.logError("error message")
