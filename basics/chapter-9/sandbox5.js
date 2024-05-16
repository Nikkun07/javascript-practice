//example 1 - sorting strings
// const names = ['Nikkun', 'Sakuya', 'Renti', 'Fyo', 'Naomi'];

// names.sort(); //Destructive Method
// names.reverse();

// console.log(names);

//example 2 - numbers
const scores = [10, 50, 20, 5, 35, 70, 45];
scores.sort((a,b) => a - b);
console.log(scores);
// console.log(scores);

//example 3 - sorting objects

const players = 
[
    {name: 'Nikkun', score: 20},
    {name: 'Renti', score: 10},
    {name: 'Sakuya', score: 50},
    {name: 'Nanaomi', score: 30},
    {name: 'Wow', score: 70},
    {name: 'Fyo', score: 60}
];

//players.sort(); //Wont work. Doesnt know what it needs to sort.

// players.sort((a, b) =>
// {
//     if(a.score > b.score)
//     {
//         return -1;
//     }
//     else if (b.score > a.score)
//     {
//         return 1;
//     }
//     else
//     {
//         return 0;
//     }
// });

// console.log(players);

//Organized Code:
players.sort((a,b) => b.score - a.score);
console.log(players);