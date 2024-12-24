// const userEmail = "daksh@google.com"
const userEmail = []
if(userEmail) {
    console.log("Got User email")
} else {
    console.log("Don't have user email")
}

// falsy values
// false, 0 , -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function() {}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??) : null undefined
let val1 = null;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15
console.log(val1)

// ternary operator
const iceTreaPrice = 100
iceTreaPrice >= 80 ? console.log("I will buy") : console.log("I will not buy")