//Switch Statements

const grade = 'D';

//using if statements
//very inefficient 

/* if(grade === 'A')
{
    
}
else if(grade === 'B')
{
    
}
else if(grade === 'C')
{

}
. . .  */

switch(grade)
{
    case 'A':
        console.log('You got an A!');
        break;
    case 'B':
        console.log('You got an B!');
        break;
    case 'C':
        console.log('You got an C!');
        break;
    case 'D':
        console.log('You got an D!');
        break;
    case 'E':
        console.log('You got an E!');
        break;
    default:
        console.log('You failed lmao.');
}



//Variables & Block scope

const age = 30; //global scope. Can be accessed anywhere within the file.
if (true)
{
    const age = 40; //local scope. Can only be accessed within this block.
    const name = 'Shaun';
    console.log("Outside code block: ", age, name);

    if(true)
    {
        const age = 50; //local nested scope. Can only be accessed within this nested statement;
        console.log("Inside 2nd code block ", age);
        var test = 'Bruh';
    }
}

console.log("Outside code block: ", age, name, test);