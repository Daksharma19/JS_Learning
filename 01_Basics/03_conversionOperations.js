let score = "33abc"

console.log(typeof score)

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" or "daksh" => NaN(Not a Number)
// "true" => 1 and "false" => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true and 0 => false
// "" => false
// "daksh" => true


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// **************************************  Operations **********************************

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log(+true);
console.log(+"");

let num1, num2 , num3
num1 = num2 = num3 = 2 + 2

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion