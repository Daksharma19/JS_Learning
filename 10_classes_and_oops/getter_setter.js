class User{
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email() {
        return this._email.toUpperCase()
    }
    set email(value) {
        this._email = value
    }
    get password(){
        return `${this._password}daksh`
    }

    set password(value) {
        this._password = value
    }
}

const daksh = new User("daksh@gmail.com","abcd")
console.log(daksh.password)