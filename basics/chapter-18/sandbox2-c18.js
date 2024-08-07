//Sets

const namesArray = ['Nikkun', 'Sakuya', 'Renti', 'Guian', 'Sakuya'];
console.log(namesArray);

//const namesSet = new Set(['Nikkun', 'Sakuya', 'Renti', 'Guian', 'Sakuya']);
// const namesSet = new Set(namesArray);
// console.log(namesSet);

// const uniqueNames = [...namesSet];

const uniqueNames = [...new Set(namesArray)];
console.log(uniqueNames);


const ages = new Set();
ages.add(24);
ages.add(25).add(30);
ages.add(25);

ages.delete(25);

console.log(ages, ages.size);
console.log(ages.has(30), ages.has(25));


//Clear out the set
ages.clear();
console.log(ages);


//Cycle through the set
const retards = new Set 
([
    {name: 'Nikkun', title: 'Procrastinator'},
    {name: 'Sakuya', title: 'Racist'},
    {name: 'Renti', title: 'Idiot'},
]);

retards.forEach(retard => 
{
    console.log(retard.name, "the", retard.title);
});