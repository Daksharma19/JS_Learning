const coding = ['HTML', 'CSS', 'JS', 'React', 'Node'];

// coding.forEach(function (val) {
//     console.log(val);
// } )

// coding.forEach((item) => {
//     console.log(item);
// })

function printMe(value) {
    console.log(value);
}
// only give the reference of function of the function call
// coding.forEach(printMe);

// interesting 
coding.forEach( (item, index,arr) => {
    console.log(item, index, arr);
})


const myCoding = [
    {
        languageName: 'HTML',
        languageFileName: "html"
    },
    {
        languageName: 'Java',
        languageFileName: "java"
    },
    {
        languageName: 'JavaScript',
        languageFileName: "js"
    },
    {
        languageName: 'C++',
        languageFileName: "cpp"
    },
]


myCoding.forEach( (item) => {
    console.log(item.languageName);
})
