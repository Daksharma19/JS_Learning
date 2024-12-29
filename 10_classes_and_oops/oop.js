const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}

//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount,isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function() { 
        console.log(`Welcome ${this.username}`);
    }

    return this
}

//  if we dont use new keyword the values will be overrighted of userOne
//   ***** Working Mechanism of using new keyword *****
//  (1) a new instance is created 
//  (2) a constructor function is called
//  (3) data is injected to this keyword from constructor function and then you get it 

const userOne = new User("daksh",8,true)
const userTwo = new User("madhav",10,false)
console.log(userOne.constructor)
console.log(userTwo instanceof User)