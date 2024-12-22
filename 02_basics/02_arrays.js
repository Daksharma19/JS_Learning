const marvel_heros = ["thor","spiderman","ironman"]
const dc_heros = ["batman","superman","flash"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros[3]);

// const heros = marvel_heros.concat(dc_heros)
// console.log(heros);

// spread method (prefered than concat)
const allHeros = [...marvel_heros,...dc_heros]
console.log(allHeros)

const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,2,1]]]
const real_another_array = anotherArr.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Daksh"))
console.log(Array.from("Daksh"))    // convert it into array
console.log(Array.from({name: "Madhav"}))   // interesting case to create an array of either key or of values

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));


// learned array