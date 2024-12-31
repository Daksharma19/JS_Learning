const User = {
    _email: 'h@hc.com',
    _password: "abc",

    get email() {
        return this._email.toUpperCase()
    },
    set email(value) {
        this._email = value
    }
}

// by default Object.create(null)
const iAmUser = Object.create(User)
console.log(iAmUser.email);