const products = 
[
    {name: 'gold star', price: 30},
    {name: 'green shell', price: 10},
    {name: 'red shell', price: 40},
    {name: 'banana skin', price: 5},
    {name: 'mushroom', price: 50}
];


// const filteredArray = products.filter(product => product.price > 20);

// const promos = filteredArray.map(product => 
// {
//     return `the ${product.name} is ${product.price /2} Pounds`;
// });


// console.log(promos);

//Method chaining version:

const promos = products
    .filter(product => product.price > 20)
    .map(product => `the ${product.name} is ${product.price /2} Pounds`);


console.log(promos);