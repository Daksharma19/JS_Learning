// Primitive Data Types
// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

const Id = Symbol('123')
const anotherId = Symbol('123')
console.log(Id == anotherId);

const bigNumber = 4138418374981238189231n

// Reference Data Types (Not Primitive) 
// Arrays, Objects, Functions

const heros = ["superman" , "shaktimaan" , "doga"]

let myObj = {
    name: "Daksh",
    age: 20,
}

const myFunction = function() {
    console.log("Hello World!!");
} 

console.log(typeof myFunction);
console.log(typeof Id);


// https://262.ecma-international.org/5.1/#sec-11.4.3


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive) and Heap Memory(Non Primitive)  - We get reference for heap 
// while a copy of that element in stack memory

// Stack memory are used in Primitive Data Type 
// while non primitive data types are used in Heap memory 

// example for stack memory
let emailId = "daksh@gmail.com"
let anotherEmailId = emailId
anotherEmailId = "sharma@yahoo.com"

console.log(emailId);
console.log(anotherEmailId);


// example for heap memory 
let userOne = {
    email: "madhav@gmail.com",
    upi: "12312@ybl",
}
let userTwo = userOne
userTwo.email = "cricket@play.com"  
console.log(userOne.email);
console.log(userTwo.email);


