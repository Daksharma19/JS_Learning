console.log("2" > 1)
console.log("02" > 1)

console.log(null > 0) // false
console.log(null == 0)  // false
console.log(null >= 0) // gives true

// The reason is that an equality check == and comparisons > < <= >= works differently
// That's why null >= 0 is true and null > 0 is false

console.log(undefined == 0); // hamesh false dega

// strict check (check data type as well )
console.log("2" === 2); // false 
