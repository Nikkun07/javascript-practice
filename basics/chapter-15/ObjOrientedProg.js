//Object Literal
//Not Suggested
const userOne = 
{
    username: 'Nikkun',
    email: 'nikkun.illust@gmail.com',
    login()
    {
        console.log('The user has logged in.');
    },
    logout()
    {
        console.log('The user has logged out.');
    }
}

const userTwo = 
{
    username: 'Rappo',
    email: 'sleepy.raccoon@gmail.com',
    login()
    {
        console.log('The user has logged in.');
    },
    logout()
    {
        console.log('The user has logged out.');
    }
}

console.log(userOne.email, userOne.username);
userOne.login();

console.log(userTwo.email, userTwo.username);
userTwo.login();

//Preferred way:
const userThree = new User('Claire', 'sampleEmail@email.com');