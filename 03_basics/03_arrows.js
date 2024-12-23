const user = {
    username: "sekiro",
    price: 1000,
    welcomeMessage: function() {
        console.log(`${this.username}, Welcome to website`);
        // console.log(this)
    }
}

// user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()
// console.log(this)

// function testing() {
//     let username = "holala"
//     console.log(this.username)
// }
// testing()

const testing = () => {
    let username = "aditya"
    console.log(this)
}
// testing()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// if we use curly brackets we have to use return keyword otherwise not in paranthesis

const addTwo = (num1, num2) => ({name: "saurabh"})
console.log(addTwo(2,5))


