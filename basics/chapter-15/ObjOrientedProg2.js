class User
{
    constructor(username, email)
    {
        //setup properties of the Object
        this.username = username;
        this.email = email;
        this.score = 0;
    }

    login()
    {
        console.log(`${this.username} just logged in.`);
        return this;
    }

    logout()
    {
        console.log(`${this.username} just logged out.`);
        return this;
    }

    incScore()
    {
        this.score++;
        console.log(`${this.username} has a score of ${this.score}.`);
        return this;
    }
}

const userOne = new User('Rappo', 'sleepy.raccoon@email.com');
const userTwo = new User('Nikkun', 'nikkun.illust@gmail.com');

// console.log(userOne, userTwo);
// userOne.login();
// userOne.logout();
//This wont work unless there is a returned value in the constructed method that is not undefined:
userOne.login().incScore().incScore().incScore().logout(); 

//the 'new' keyword
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' to the new empty object
// 3 - it calls the constructor function to 'build' the object