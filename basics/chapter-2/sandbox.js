//alert('hello world');

//console function outputs
/* console.log(1);
console.log(2); */

//let (varname) = (value)
let age = 25;
let year = 2024;
console.log(age, year);
age = 30;  //"let" allows you to override the value of the variable later on
console.log(age);
console.log('This is a string LUL');


const points = 100; //const has a locked value of a variable. It does not let you  change the value later on.
/* points = 50; */ //error
console.log(points);


var score = 75; //older way of using cons/let. It got replaced with modern standards.
console.log(score);

//Comments (Line)

/* this
is a 
block-type 
comment */


//DATATYPES

//Strings
    console.log('I will krill myself');

    let email = 'sample@email.com'
    console.log(email);

//String Concatination
    let firstName = 'Gabriel';
    let lastName = 'Reyes';

    let fullName = firstName + ' ' + lastName;
    console.log(fullName);
    
//getting characters
    console.log(fullName[0]);

//string length
    console.log(fullName.length);

//string methods
    console.log(fullName.toUpperCase());
    let result = fullName.toLowerCase();
    console.log(result, fullName);

    let index = email.indexOf('@');
    console.log(index);

//common String methods
    let email2 = 'nikkun.illust@gmail.com';
    //let result2 = email2.slice(0, 6);
    
    //let result2 = email2.substring(4, 10);
    
    //let result2 = email2.replace('k', 'g');
    let result2 = email2.replace('n', 'w');
    console.log(result2);


//Numbers

let radius = 10;
const pi = 3.14;

//console.log(radius, pi);

//Math Operators +, -, /, *, **(power), % (remainder)

// console.log(10 / 2);
// let result3 = radius % 3;
// let result3 = pi * radius**2;

//Order of operations - B I D M A S

// let result3 = 5 * (10-3)**2;
// console.log(result3);

let likes = 10;

//likes = likes + 1;

/* Short-hand notation */
//likes++; //Increment
//likes--; //Decrement
// likes += 10;
// likes -= 5;
// likes *=2;
// likes /=2;
// console.log(likes);

//NaN (Not a Number)

// console.log(5 / 'hello');
// console.log(5 * 'hello');


