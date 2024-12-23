// function definition
function sayMyName() {
    console.log("Daksh Sharma");
}

// function calling
// sayMyName()

function loginUserMessage(username = "Sam") {
    if(!username) {
        console.log("Please enter a username!!")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("sekiro"))


// using rest/spread operator
function calculateCartPrice(val1,val2,...num1) {
    return num1
}
console.log(calculateCartPrice(200,300,500,1000))

const user = {
    username: "david",
    price: 200
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username: "sam",
    price: 599
})

const myNewArray = [200,300,100,600]
function returnSecondValue(getArray) {
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([20,10,2,12,3]))