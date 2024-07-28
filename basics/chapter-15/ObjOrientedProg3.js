//Constructor Functions

/* class User
{
    constructor(username, email)
    {
        //Setup the Properties
        this.username = username;
        this.email = email;
    }
} */

//Older way to construct classes

function User(username, email)
{
    this.username = username;
    this.email = email;
}

User.prototype.login = function()
{
    console.log(`${this.username} has logged in.`);
    return this;
    
}

User.prototype.logout = function()
{
    console.log(`${this.username} has logged out.`);
    return this;
}

const userOne = new User('Rappo', 'sleepy.raccoon@email.com');
const userTwo = new User('Nikkun', 'nikkun.illust@gmail.com');


console.log(userOne, userTwo);
userOne.login();
userOne.logout();