const name = "daksh"
const repoCount = 4


console.log(name + repoCount + "Value");
console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`)   // string Interpolation

const gameName = new String('Sekiro')
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

// we can use -ve values in slice method but not in substring method
const anotherString = gameName.slice(0,4)
console.log(anotherString)


// removes starting and ending spaces (white spaces only)
const newStringOne = "            sharma     "
console.log(newStringOne.trim());


const url = "https://www.google.com/"
console.log(url.replace('/','-'));
console.log(url.includes('google'))

const newName = new String('this-is-a-string')
const myArr = newName.split('-') 
console.log(myArr);
