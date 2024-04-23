//Primitives vs Reference Types

//Primitive Types:
    //Numbers
    //Strings
    //Booleans
    //Null
    //Undifined
    //Symbols

//Reference Types
    //All Types of Objects
    //Object Literals
    //Arrays
    //Functions
    //Dates
    //All Other Objects

/* Difference is how they are stored in memory. */
/* Primitive Type are stored in a stack (has smaller space but faster) */
/* Reference Types are created in a heap (has larger space but slower) */


//Primitive Values

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

//Reference Values

const userOne = 
{
    name: 'Nikkun',
    age: 24,
}; //Only stored once in a heap

const userTwo = userOne; //poiter references to the heap.

console.log(userOne, userTwo);

userOne.age = 69;
userOne.name = 'Sakuya';

console.log(userOne, userTwo);