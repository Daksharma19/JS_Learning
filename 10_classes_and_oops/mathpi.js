const descriptor = Object.getOwnPropertyDescriptor(Math,'PI')

// console.log(descriptor)


const tea = {
    name:"tusli chai",
    price:15,
    isAvailable: true,
    orderTea: function()  {
        console.log("Not able to made tea")
    }
}

console.log(Object.getOwnPropertyDescriptor(tea,'name'));
Object.defineProperty(tea,'name',{
    writable:false,
    enumerable:false
}) 

console.log(Object.getOwnPropertyDescriptor(tea,'name'));

for (let [key,value] of Object.entries(tea)) {
    if(typeof value != 'function') {
        console.log(`${key} : ${value}`);
    }
    
}