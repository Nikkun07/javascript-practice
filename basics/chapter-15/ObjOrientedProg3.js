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

function Admin(username, email, title)
{
    User.call(this, username, email, title);
    this.title = title;
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.deleteUser = function()
{
    //delete a user
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
const userThree = new Admin('Claire', 'Claire.Test@gmail.com', 'Head Admin');


console.log(userOne, userTwo, userThree);
userOne.login();
userOne.logout();