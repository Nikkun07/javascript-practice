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
    {name: "Nikkun", premium: true},
    {name: "Renti", premium: false},
    {name: "Sakuya", premium: true},
    {name: "Sovo", premium: false},
    {name: "Chigga", premium: true},
];

const premUsers = users.filter(user =>user.premium);


console.log(premUsers);