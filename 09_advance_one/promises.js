const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // DB call, cryptography, network calls
    setTimeout(function() {
        console.log("Async Task is Complete");
        resolve()   // this connect to then  while reject is handled by .catch()
    },1000)
})
promiseOne.then(function(){
    console.log('Promise consumed');  
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 resolved");
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"daksh",email:"daksh@123.com"})
    },1000)
})
promiseThree.then(function(user){   
    console.log(user);
})


// we will use chaining of .then 
const promiseFour = new Promise(function(resolve,reject) {
    setTimeout(function(){
        let error = false
        if(!error) {
            resolve({username:"sharma",password:"123"})
        }else {
            reject('ERROR: Something Went Wrong!!')
        }
    }, 1000)
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);  
})
.catch(function(error){
    console.log(error);
}).finally(()=>console.log("The promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve,reject) {
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username:"madhav",password:"123"})
        }else {
            reject('ERROR: JS Went Wrong!!')
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        // handled the errors gracefully
        console.log(error)
    }
}
consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(typeof response)
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ",error)
//     }
// }
// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch(()=>{console.log("Error!!")})
