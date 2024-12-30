function SetUsername(username) {
    // complex db calculations
    console.log("called")
    this.username = username
}

function createUser(username, email, password){
    // we explicitly call the another function because without this it is just the reference 
    // .call is used to hold the reference of variable
    SetUsername.call(this,username)

    this.email = email
    this.password = password
}

const user = new createUser("daksh","daksh@gmail.com","123")
console.log(user);