//reduce method
// const scores = [10, 20, 60, 40, 70, 90, 30];

//return the number of items in the array that satisfy the condition placed


// const result = scores.reduce((acc, current) =>
// {
//     if(current > 50)
//     {
//         acc++;
//     }
//     return acc;
// }, 0);


// console.log('The count of numbers that exceed 50 is: ', result);


const scores = 
[
    {player: "Nikkun", score: 100},
    {player: "Nikkun", score: 50},
    {player: "Sakuya", score: 0},
    {player: "Chi", score: 78},
    {player: "Nanaomi", score: 25},
    {player: "Nikkun", score: 40},
    {player: "Sovo", score: 73},
    {player: "Nikkun", score: 50},
    {player: "Renti", score: 69}
];


const nikkunTotal = scores.reduce((acc, curr) =>
{
    if(curr.player === "Nikkun")
    {
        acc += curr.score;
    }
    return acc;
},0);

console.log(nikkunTotal);