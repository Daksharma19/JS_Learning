// const appUser = new Object()        // singleton object

const appUser = {}      // non singleton object

appUser.id = "123abc"
appUser.name = "Walter"
appUser.isLogginIn = false

// console.log(appUser)

const regularUser = {
    email: "walter@google.com",
    fullname: {
        userfullname : {
            firstName : "Daksh",
            lastName: "Sharma"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstName);


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = {obj1, obj2}
 
// const obj3 = Object.assign({} /*target*/ ,obj1,obj2  /*sources*/)        // good practice to add {} otherwise all values will be merged to first object i.e obj1

const obj3 = {...obj1,...obj2}      //using spread operator
console.log(obj3)


console.log(Object.keys(appUser))
console.log(Object.values(appUser))
console.log(Object.entries(appUser))
console.log(appUser.hasOwnProperty('salary'))

// ++++++++++++++++++++++++++++++  Object de-structure +++++++++++++++++++++++++++++++++++++

const course = {
    courseName: "Javascript in Hindi",
    price: 899,
    courseInstructor: "hitesh"
}
const {courseInstructor: instructor} = course
// console.log(instructor)


// JSON format for API
// {
//     "name":"daksh",
//     "coursename":"web development",
//     "price":"free"    
// }


