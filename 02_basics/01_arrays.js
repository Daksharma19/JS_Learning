// arrays

// array-copy operations create shallow copies ( a copy whose properties share the same references )

const myArr = [12,23,1,3];

const myArr2 = new Array(2,1,3,5,6)
console.log(myArr2);

// array Methods

myArr.push(6)

// myArr.unshift(2);
// myArr.shift();
// console.log(myArr.includes(12));


const newArr = myArr.join()
console.log(myArr)  // converted to string data type

// **slice, splice

// slice
console.log("A ", myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ", myArr);


// splice (manipulate the original array by removing the part we spliced from original)
const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C ", myArr);