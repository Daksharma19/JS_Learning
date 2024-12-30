class User{
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(`Username is : ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const userOne = new Teacher("daksh","newme@gmail.com","123")
userOne.addCourse()
userOne.logMe()

const userTwo = new User("madhav")
// userTwo.addCourse()
userTwo.logMe()

console.log(userOne instanceof Teacher)