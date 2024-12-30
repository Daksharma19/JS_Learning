class User{
    constructor(username) {
       this.username = username 
    }
    logMe() {
        console.log(`Username is : ${this.username}`)
    }
    // to do not allow other function have access of this function
    static createId() {
        return `123`
    }
}

const daksh = new User("daksh")


class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone","i@phone.com")
iphone.logMe()

