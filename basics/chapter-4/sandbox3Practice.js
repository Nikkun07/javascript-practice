//Arrow Function Practice

/* const greet = function()
{
    return 'Hello, world';
}; */

//Arrow Functtion Version
/* const greet1 = () => 'Hello, Retard';

const result = greet();
const result1 = greet1();
console.log(result, '. ', result1); */

//Regular Function Expression
//Convert it into an arrow Function
/* const bill = function(products, tax)
{
    let total = 0;
    for(let i = 0; i < products.length; i++)
    {
        total += products[i] + products[i] * tax;
    }
    return total;
};

console.log(bill([10, 15, 30], 0.2)); */

//Arrow Function Version

const bill = (products, tax) =>
{
    let total = 0;
    for(let i = 0; i < products.length; i++)
    {
        total += products[i] + products[i] * tax;
    }
    return total;
};

console.log(bill([10, 15, 30], 0.2));
