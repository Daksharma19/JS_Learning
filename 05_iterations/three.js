// for of
// objects are not iterable in for of loop


const arr = [1, 2, 3, 4, 5]

for(const val of arr) {
    // console.log(val);
}

// const greetings = "Hello World!"
// for (const character of greetings) {
//     console.log(character);
// }


// Maps

const map = new Map()
map.set('IN','India')
map.set('USA','United States of America')
map.set('Fr','France')
map.set('IN','PK')
// console.log(map);
for (const [key,value] of map) {
    console.log(key,value);
}

const myObj = {
    'Game1' : 'NFS',
    'Game2' : 'GTA',
    'Game3' : 'Spiderman'
}

// does not work, there are other methods to do it 
// for (const [key,value] of myObj) {
//     console.log(key,value);
// }