//Rest Parameter
//When the number of parameters is not yet defined, use Rest Parameter to take in all parameter input.

const double = (...nums) =>
{
    console.log(nums);
    return nums.map(num => num*2);
}

const result = double(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15);
console.log(result);


//Spread Syntax (Arrays)
//Spread Syntax separates an array to an individual object. (One each per array item)

const people = ['Renti', 'Nikkun', 'Sakuya'];
console.log(...people);
//Add an undefined number of array items to an existing array
const retards = ['Fyo', 'Guian', ...people];
console.log(retards);


//Spread Syntax (Object)
const person = {name: 'Renti', title: 'Artist'};
const personClone = {...person, location: 'Parañaque'};

console.log(personClone);