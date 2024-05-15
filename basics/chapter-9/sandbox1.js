const scores = [10, 30, 15, 25, 50, 40, 5];

//filter method
//Array iteration - check each item (inside callback function) - if check passes, keep item in filtered array.

// const filteredScores = scores.filter((score) =>
// {
//     return score > 20;
// });

// console.log(filteredScores);

const users = 
[
    {name: "Nikkun", retard: true},
    {name: "Renti", retard: false},
    {name: "Sakuya", retard: true},
    {name: "Sovo", retard: false},
    {name: "Chigga", retard: true},
];

const retardUsers = users.filter(user =>user.retard);


console.log(retardUsers);