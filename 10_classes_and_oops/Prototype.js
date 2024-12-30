let myName = "daksh"

// console.log(myName.trueLength)

let myHeros = ["thor","spiderman"]
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () { 
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}


Object.prototype.daksh = function()  {
    console.log("i am present in all objects");
}

Array.prototype.hiDaksh = function() {
    console.log("Hi Daksh!!")
}


heroPower.daksh()
myHeros.daksh()
// myHeros.hiDaksh()
myHeros.hiDaksh()


// Prototypal inheritance


const User = {
    name:"madhav",
    email:"daksh@gmail.com",
}
const Teacher = {
    makeVideo:true
}
const TeachingSupport = {
    isAvailable: false
}
const TaSuppor = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUsername = "gargi              "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is : ${this.trim().length}`);
}

anotherUsername.trueLength()
"daksh    ".trueLength()