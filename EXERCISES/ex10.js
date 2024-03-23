class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    validate(username, password) {
        if (this.username === username && this.password === password) {
            return "Login Successful";
        } else {
            return "Login Failed";
        }
    }
}



const user1 = new User("username1", "password1");
const user2 = new User("username2", "password2");


console.log(user1.validate("username1", "password1")); 
console.log(user1.validate("username1", "wrongpassword")); 
console.log(user2.validate("username2", "password2")); 
console.log(user2.validate("username2", "wrongpassword"));                                             