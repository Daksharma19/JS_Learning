const balance = new Number(100)
console.log(balance);

console.log(balance.toString.length);
console.log(balance.toFixed(3));    // use it somewhere like e commerce websites for not so precision values 

const otherNumber = 125.6956
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));  // add commas acc to Indian Standards

// +++++++++++++++++++++++++++++++++++++++++++++  MATHS +++++++++++++++++++++++++++++++++++++++++

console.table([Math.round(4.3), Math.floor(5.3),Math.ceil(5.3)])


console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);


const min = 10
const max = 20
// ** very interesting formula 
console.log(Math.floor(Math.random() * (max - min + 1)) + min)