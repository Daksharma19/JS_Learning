// global scope
let a = 100

if(true) {
    // local scope
    let a = 200
    const b = 29
    console.log("Inner : ",a)
}
// console.log(a)

function one() {
    const username = "santa"
    function two() {
        const website = "google.com"
        console.log(username)
    }
    // console.log(website)
    two()
}
one()


// +++++++++++++++++++++++++++ INTERSTING +++++++++++++++++++++

addone(2)
function addone(num) {
    return num + 1
}

// addTwo(1)
const addTwo = function(num) {
    return num + 2
}
addTwo(5)

