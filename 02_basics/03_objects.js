// singleton - when we dont declare like literals

// object literals

// Object.create        // here singelton is created 


const mySym = Symbol("mykey1")
const JsUser = {
    name:  "daksh",
    "full name" : "Daksh Sharma",
    [mySym]: "key1",           // have to do [] so that the type is symbol otherwise will change to string
    age: 20,
    email: "daksh@gmail.com",
    isLoggedIn: false,
    lastLogginDays: ["Mondays","Wednesday"]
}

// console.log(JsUser.email)
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "daksh@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "daksh@google.com"
console.log(JsUser)
JsUser.greeting = function() {
    console.log("Hello JS user")
}
JsUser.greetingByName = function() {
    console.log(`Hello JS user, ${[this["full name"]]}`);
}
console.log(JsUser.greeting())
console.log(JsUser.greetingByName());