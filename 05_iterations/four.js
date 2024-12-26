// maps are not iterable in for in loop

const myObj = {
    js: 'JavaScript',
    cpp: 'C++',
    rp: 'ruby',
    swift: 'swift by apple'
}
for (const key in myObj) {
    console.log(key,':- ',myObj[key]);
}


const programming = ["JavaScript", "C++", "Ruby", "Swift"]
for (const key in programming) {
    console.log(key)
}

// const map = new Map()
// map.set('IN','India')
// map.set('USA','United States of America')
// map.set('Fr','France')
// map.set('IN','PK')

// for (const key in map) {
//     console.log(key);
// }