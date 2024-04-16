//Logical Operators - OR || and AND &&

const password = 'bruh';

if(password.length >= 12 && password.includes('!'))
{
    console.log("That password goes hard");
}
else if(password.length >= 8 || password.includes('!') && password.length > 5)
{
    console.log("That password is long enough");
}
else
{
    console.log("You need to have a stronger password.");
}

//Logical NOT (!)

let user = false;

console.log(!true);
console.log(!false);