// Immediately Invoked Function Expressions (IIFE)

// we use iife to avoid global scope pollution 

(function iife() {
    // named iife
    console.log("DB Connected!!");
})();       // here we have to end it explicitly also with ;


// ()() first set is for function declaration and second set is for calling it 

((name) => {
    // unnamed iife
    console.log(`DB Connected TWO!! ${name}`)
})('madhav');