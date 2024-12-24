const score = 200
if(score > 100) {
    let power = "fly"
    console.log(`User Power : ${power}`);
}

const balance = 1000

// if(balance > 500) console.log("test"),console.log("test2");

if(balance < 500) {
    console.log("less than ")
} else if(balance < 750) {
    console.log("less than 750")
} else if(balance < 950) {
    console.log("less than 950")
} else{
    console.log("less than 1200")
}

const isLoggedIn = true
const debitCard = true
const isLoggedInFromGoogle = false
const isLoggedInFromEmail = true

if(isLoggedIn && debitCard) {
    console.log("Allow to purchase")
}

if(isLoggedInFromGoogle || isLoggedInFromEmail) {
    console.log("User Logged in ")
}